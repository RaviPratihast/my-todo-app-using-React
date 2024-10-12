import React, { useState } from "react";
import { Button } from "../../index-component";
import "./FiltersWindow.css";
const FiltersWindow = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <div className="filter-container">
          <Button >Clear All</Button>
          <div className="sort-by-filter-container">
            <h2>Sort by Priority</h2>
            <div className="sort-by-priority-filters">
              <label for="option1">
                <input type="radio" name="filter" value="option1" />
                Low to High
              </label>
              <label>
                <input type="radio" name="filter" value="option2" />
                High to Low
              </label>
            </div>
          </div>
          <div className="sort-by-filter-container">
            <h2>Filter by Priority</h2>
            <div className="sort-by-priority-filters">
              <label for="option1">
                <input type="checkbox" name="filter" value="option1" />
                Low
              </label>
              <label>
                <input type="checkbox" name="filter" value="option2" />
                Medium
              </label>
              <label>
                <input type="checkbox" name="filter" value="option2" />
                High
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { FiltersWindow };
