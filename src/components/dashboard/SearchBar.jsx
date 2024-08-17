import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWidgets } from "./dashboardSlice";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    dispatch(searchWidgets({ searchQuery: query }));
  };

  return (
    <div className="search_container">
      <IoMdSearch className="search__icon" />
      <input
        type="text"
        placeholder="Search your Widgets..."
        className="search-input-area"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
