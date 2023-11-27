import React from "react";
import no_image_handler from "./assets/no_image_handler.jpeg";

const Card = ({ movie, index }) => {
  return (
    <div
      className="col-md-3 m-4 p-2 pb-4"
      style={{ backgroundColor: "#f7f7f7", borderRadius: "10px" }}
      key={index}
    >
      <h5 className=" p-2 w-2">
        {movie.Title} ({movie.Year}) -{" "}
        {movie.Type === "movie" ? "Movie" : "Series"}
      </h5>
      <br />
      <img
        style={{ width: "75%" }}
        src={movie.Poster !== "N/A" ? movie.Poster : no_image_handler}
        alt={movie.Title}
      />
    </div>
  );
};

export default Card;
