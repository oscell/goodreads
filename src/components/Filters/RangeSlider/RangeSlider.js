import React, { useState, useEffect } from "react";
import { useRange } from 'react-instantsearch';
import { RangeSlider as SpectrumRangeSlider } from '@adobe/react-spectrum';
import "./RangeSlider.css"

export function RangeSlider({title,...props}) {
  const { start, range, canRefine, refine } = useRange(props);
  const { min, max } = range;
  const [value, setValue] = useState({ start: min, end: max });

  const from = Math.max(min, Number.isFinite(start[0]) ? start[0] : min);
  const to = Math.min(max, Number.isFinite(start[1]) ? start[1] : max);

  useEffect(() => {
    setValue({ start: from, end: to });
  }, [from, to]);

  return (
    <div className="customeRefinementList">
      <div className="range">
      {title && <h3>{title}</h3>}

          <SpectrumRangeSlider
            minValue={min}
            maxValue={max}
            value={value}
            onChange={setValue}
            onChangeEnd={({ start, end }) => refine([start, end])}
            isDisabled={!canRefine}
          />

      </div>
      <ul className="range-labels">
        {Array.from({ length: max - min + 1 }, (_, i) => (
          <li key={i} className={value.start === min + i ? 'active selected' : ''}>
            <div className="circle" style={{ 
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              backgroundColor: 'blue', 
              display: 'inline-block', 
              margin: '0 5px' 
            }} />
            {min + i}
          </li>
        ))}
      </ul>
    </div>
  );
}
