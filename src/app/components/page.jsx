"use client";
import React, { useEffect, useState } from "react";

const FetchClientpage = () => {
  const [search, setSearch] = useState("");
  const [album, setAlbum] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
  };

  // Fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
        setFilteredAlbums(data); // initialize with all albums
      });
  }, []);

  // Filter albums based on search
  useEffect(() => {
    const result = album.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setFilteredAlbums(result);
  }, [search, album]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          className="border-2 border-gray-400 rounded-md px-2 py-1 w-full"
          type="search"
          placeholder="Search album..."
          value={search}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((item) => (
            <div className="bg-gray-200 p-3 rounded-md shadow" key={item.id}>
              <h2 className="font-bold">User ID: {item.userId}</h2>
              <p className=" title">{item.title}</p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FetchClientpage;
