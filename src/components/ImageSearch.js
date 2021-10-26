import React, { useState } from "react";
import "./ImageSearch.css";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="search">
      <h1 className="text-5xl text-purple-500">Image Gallery</h1>
      <form onSubmit={onSubmit} className="search__container">
        <input
          onChange={(e) => setText(e.target.value)}
          className="search__input"
          type="text"
          placeholder="Search for images"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
