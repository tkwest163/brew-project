import './App.scss';
import beers from "./data/beersObj";
import Beer from "./components/Beer/Beer";
import Search from "./components/Search/Search";
import CheckBox from "./components/CheckBox/CheckBox";
import Cards from "./components/Cards/Cards";

const App = () => {

  const mappedBeers = beers.map(beer => {
    return <Beer drink = {beer} />
  });
 

  return (
   
    <div className="App">
      <div className="heading">
        <h1>Brewdog</h1>
        <p>Which brew will you choose?</p>
      </div>
        <Search />
        <CheckBox />
        {mappedBeers}
    
    </div>
  
  );
  }

export default App;
