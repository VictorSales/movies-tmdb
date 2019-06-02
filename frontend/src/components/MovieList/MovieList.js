import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";

const MovieList = ({ movies, genres, onMovieClick }) => {
  const moviesHTML = movies.map(movie => {
    const genreNames = genres
      .filter(genre => movie.genre_ids.indexOf(genre.id) > -1)
      .map(genre => genre.name);
    return (
      <MovieItem
        key={movie.id}
        movie={movie}
        genreNames={genreNames}
        onMovieClick={onMovieClick}
      />
    );
  });
  return moviesHTML.length > 1 ? (
    <div className="ui cards">{moviesHTML}</div>
  ) : null;
};

export default MovieList;
