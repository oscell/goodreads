import React from 'react';
import { useToggleRefinement } from 'react-instantsearch';
import "./CustomToggleRefinement.css"

export function CustomToggleRefinement(props) {
  const { value, refine } = useToggleRefinement(props);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={value.isRefined}
        onChange={(event) => {
          refine({ isRefined: !event.target.checked });
        }}
      />
      <span className="slider round"></span>
      <span>{props.attribute}</span>
    </label>
  );
}

