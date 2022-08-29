import type { NextPage } from "next";
import React, { useState } from "react";
import CardList from "../components/CardList";
import Search from "../components/Search";

export const SearchTermContext = React.createContext(null);

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTermValue = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchTermContext.Provider value={{ searchTerm, changeSearchTermValue }}>
      <header className="header" id="myHeader">
        <h1>TV shows catalog</h1>
      </header>
      <Search />
      <CardList />
    </SearchTermContext.Provider>
  );
};

export default Home;
