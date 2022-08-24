import { useContext } from "react";
import { SearchTermContext } from "../pages";

const SearchBar = () => {

const { searchTerm, changeSearchTermValue } = useContext(SearchTermContext);

  return (
    <div className="search_container">
      <h1>TV shows catalog</h1>

      <input
        type="search"
        name="search_tv_shows"
        id="search_tv_shows"
        className="search_tv_shows"
        placeholder="Type something to start searching"
        value={searchTerm}
        onChange={changeSearchTermValue}
      />
    </div>
  );
};

export default SearchBar;