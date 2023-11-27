import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Card from "./card";

const API_URL =
  "https://www.omdbapi.com/?apikey=" + process.env.REACT_APP_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("Avatar");
  const [searchFlag, setSearchFlag] = useState(false);

  const getAPIData = async (val) => {
    setSearchFlag(true);
    const response = await fetch(API_URL + "&s=" + val);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search !== undefined ? data.Search : []);
    setSearchFlag(false);
  };

  useEffect(() => {
    getAPIData("Avatar");
  }, []);

  return (
    <div className="container">
      <div className="row text-center">
        <h1
          className="m-3 p-3"
          style={{ fontFamily: "Ephesis", fontSize: "50px" }}
        >
          Movie Box
        </h1>

        <div className="col">
          <div className="p-3 m-3">
            <input
              id="searchBox"
              className="p-2"
              style={{ width: "50%", borderRadius: "5px" }}
              type="search"
              placeholder="Enter a movie title"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.target.blur();
                  getAPIData(searchValue);
                }
              }}
            />

            <button
              className="p-2 m-1"
              style={{ border: "none", borderRadius: "30px", fontSize: "18px" }}
              onClick={() => {
                getAPIData(searchValue);
              }}
            >
              {" "}
              &nbsp; 🔎 &nbsp;{" "}
            </button>
          </div>

          <div className="row justify-content-center">
            {searchFlag ? (
              <h3>Searching...</h3>
            ) : movies.length === 0 ? (
              <h3>No movies found</h3>
            ) : (
              movies.map((movie, index) => Card({ movie, index }))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
