import React from 'react'
import beers from '../../data/beersObj';

const Beer = (props) => {
    const { name, image_url, tagline, description } = props.drink;
    

  return (
    <>
    <p>{name}</p> 
    <p>{tagline}</p>
    <p>{description}</p>
    <img
    src={image_url}
    className="image"
    alt="picture of either beer listed or keg only"
    />
    </>
  );
};

export default Beer;