import "./Search.scss";

const Search = (props) => {
  const { searchInput, handleInput } = props;
  
return (
  
 <form className="search">
  <label className="search__label">
  </label>
  <input 
    type="search"
    placeholder="Search..."
    size="50"
    onInput={handleInput}
    className="search__input"
    />
 </form>

)

};

export default Search;