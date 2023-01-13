import './App.scss';

import Beer from "./components/Beer/Beer";
import CheckBox from "./components/CheckBox/CheckBox";
import React from 'react';
import Search from "./components/Search/Search";
import { useState, useEffect } from "react";

const App = () => {
  const [ searchInput, setSearchInput ] = useState("");
  const [ beers, setBeerData ] = useState([]);
  const [ url, setUrl ] = useState(`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
  const [phChecked, setPhChecked ] = useState(false);


useEffect (() => {
  fetch(url)
  .then ((response) => {
    if (response.ok) {
      return response.json();
    } 
    throw response;
  })
  .then ((data) => {
    setBeerData(data)
  });
}) 

    
  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchInput(userInput);
  };

  const mappedBeers = beers.map((beer, i) => {
    return <Beer drink = {beer} key = {i}/>
  });

  const searchBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchInput)
  });

  const mappedSearchBeers = searchBeers.map((beer) => {
    return <Beer drink = {beer}/>
  });

  const abvChange = () => {
        setUrl(`https://api.punkapi.com/v2/beers?abv6gt`)
  }

  const classicChange = () => {
    setUrl(`https://api.punkapi.com/v2/beers?brewed2010before`)
  }

  const filteredPh = beers.filter((beer) => {
    return beer.ph < 4;
  }); 

  const filteredPhBeers = filteredPh.map((beer) => {
    return <Beer drink = {beer}/>
  });

  const phChanged = () => {
    setPhChecked(true)
  };
 


  
  
  return (
   
    <div className="App">
      <div className="heading">
        <h2>Welcome </h2>
        <h3>to</h3>
        <h1>Brewdog</h1>
        <h4>Which brew will you choose?</h4>
      </div>
        <Search 
          searchInput={searchInput}
          handleInput={handleInput}/>
          <CheckBox 
          abvChange={abvChange}
          classicChange={classicChange}
          isPhChecked={phChanged}/>


        <main>
        {searchInput ? mappedSearchBeers : mappedBeers}
        {phChecked ? filteredPhBeers : mappedBeers}
        </main>
    
    </div>
  
  );
  };


export default App;