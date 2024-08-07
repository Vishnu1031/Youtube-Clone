import React from "react";

const genres = [
  "All",
  "News",
  "Live",
  "Cricket",
  "Football",
  "Tenis",
  "Songs",
  "All",
  "News",
  "Live",
  "Cricket",
  "Football",
  "Tenis",
  "Songs",
];

const Genre = () => {
  return (
    <div className="">
      {genres.map((genre, index) => (
        <button key={index} className="border border-gray-200 px-4 py-2 mx-2 bg-gray-200 font-bold rounded-lg ">{genre}</button>
      ))}
    </div>
  );
};

export default Genre;
