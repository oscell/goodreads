import React from 'react';
import { useRefinementList } from 'react-instantsearch';
import "./CustomRefinementList.css";

export function CustomRefinementList({ title, transformItems, showSearch = true, ...props }) {
  const {
    items,
    refine,
    searchForItems,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList({
    ...props,
    showMore: true, // Enable the show more functionality
    limit: 10,      // Initial number of items to display
    showMoreLimit: 20 // Number of items to display when "show more" is active
  });

  const transformedItems = transformItems ? transformItems(items) : items; // Apply transformation if provided

  return (
    <div className='customeRefinementList'>
      {title && <h3>{title}</h3>}
      {showSearch && ( // Conditionally render the search input
        <div className="search-input-container">
          <input
            type="search"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={512}
            onChange={(event) => searchForItems(event.currentTarget.value)}
          />
        </div>
      )}
      <ul className='refinementList-container'>

        {transformedItems.map((item) => (
          <li key={item.label} className="checkbox-wrapper-65">
            <label>
              <input
                type="checkbox"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span className="cbx">
                <svg width="12px" height="11px" viewBox="0 0 12 11">
                  <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                </svg>
              </span>
              <span>{item.label} ({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
      {canToggleShowMore && (
        <button onClick={toggleShowMore} className='show-more-button'>
          {isShowingMore ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}
