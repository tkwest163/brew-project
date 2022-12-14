import React from 'react'
import "./CheckBox.scss";

const CheckBox = () => {






  return (
    <div className="checkbox-wrapper">
        <label>
            <input type="checkbox" />
            <span>High ABV (>6.0%)</span>
        </label>
        <label>
            <input type="checkbox" />
            <span>Classic Range</span>
        </label>
        <label>
            <input type="checkbox" />
            <span>Acidic (pH less than 4)</span>
        </label>
   </div>
  );
};

export default CheckBox