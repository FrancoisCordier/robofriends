import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="flex justify-center pa2">
      <input
        className="pa3 bg-lightest-blue"
        type="search"
        placeholder="Search"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
