import React, { useState } from "react";
import "./Search.scss";
import searchIMG from "../../../../../public/icon_search.svg";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Перенаправлення на Google з використанням значення з input
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      searchValue
    )}`;
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="search">
      <input
        className={"input-search"}
        type="text"
        placeholder="search..."
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">
        <img className="searchIMG" src={searchIMG} alt="" />
      </button>
    </form>
  );
}
