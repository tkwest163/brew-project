import React from 'react'
import "./CheckBox.scss";

const CheckBox = (props) => {

    const { abvChange, classicChange, isPhChecked } = props;

  return (
    <div className="checkbox-wrapper">
        <label>
            <input type="checkbox" onChange={abvChange} />
            <span>High ABV ({'>'}6.0%)
            </span>
        </label>
        <label>
            <input type="checkbox"  onChange={classicChange}/>
            <span>Classic Range</span>
        </label>
        <label>
            <input type="checkbox" onChange={isPhChecked}/>
            <span>Acidic (pH less than 4)</span>
        </label>
   </div>
  );
};

export default CheckBox