import React from "react";
import "./MovieDetail.css";
import { isMobile } from "react-device-detect";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const MovieDetail = ({ movieSelected, genres }) => {
  if (movieSelected) {
    const genreNames = genres
      .filter(genre => movieSelected.genre_ids.indexOf(genre.id) > -1)
      .map(genre => genre.name);
    let imageURL = "https://i.imgur.com/FMdvZ8Q.png";
    if (isMobile && movieSelected.poster_path)
      imageURL = `${IMAGE_BASE_URL}original/${movieSelected.poster_path}`;
    else if (movieSelected.backdrop_path)
      imageURL = `${IMAGE_BASE_URL}original/${movieSelected.backdrop_path}`;
    return (
      <div id="movie-detail" className="ui fluid card">
        <div className="image">
          <img alt={movieSelected.title} src={imageURL} />
        </div>
        <div className="content">
          <p className="header">{movieSelected.title}</p>
          <div className="meta">
            <span className="date">{movieSelected.release_date}</span>
          </div>
          <div className="description">{movieSelected.overview}</div>
        </div>
        <div className="extra content">
          <p>{genreNames.join(", ")}</p>
        </div>
      </div>
    );
  } else return <div />;
};

export default MovieDetail;
