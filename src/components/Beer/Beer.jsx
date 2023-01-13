import React from 'react'
import "./Beer.scss";

const Beer = (props) => {
    const { name, image_url, tagline, description } = props.drink;
    

  return (
    <div className="card">
        <div className="card-contents">
    <p>Name: {name}</p> 

    <p>{tagline}</p>
    
    <p>What is this? <br></br>
    {description}</p>
    
    <img src={image_url} 
    className="image" 
    alt="picture of either beer listed or keg only" />

    </div>
    </div>
  );
};

export default Beer;