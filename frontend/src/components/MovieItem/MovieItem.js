import React from "react";
import "./MovieItem.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const MovieItem = ({ movie, genreNames, onMovieClick }) => {
  const imageURL = movie.poster_path
    ? `${IMAGE_BASE_URL}/w342/${movie.poster_path}`
    : "https://i.imgur.com/OEUD6kL.png";
  return (
    <div className="ui card movie-item" onClick={() => onMovieClick(movie)}>
      <div className="image">
        <img src={imageURL} alt={movie.title} />
      </div>
      <div className="content">
        <p className="header">{movie.title}</p>
        <div className="meta">
          <span className="date">{movie.release_date}</span>
        </div>
      </div>
      <div className="extra content">
        <p>{genreNames.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieItem;
