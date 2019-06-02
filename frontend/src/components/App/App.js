import React from "react";
import { isMobile } from "react-device-detect";
import InfiniteScrollExtend from "../InfiniteScrollExtend/InfiniteScrollExtend";
import moviedatabase from "../../api/moviedatabase";
import SearchBar from "../SearchBar/SearchBar";
import MovieDetail from "../MovieDetail/MovieDetail";
import MovieList from "../MovieList/MovieList";
import Loader from "../Loader/Loader";
import "./App.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieSelected: null,
      genres: [],
      hasMoreItems: true,
      nextPage: null,
      textMovie: "",
      pageStart: 0
    };
    this.elementRef = React.createRef();
  }

  initState = async () => {
    const responseMovies = await this.getUpcomingMovies(1);
    const responseGenres = await this.getGenres();
    this.setState({
      movies: responseMovies.data.results,
      movieSelected: responseMovies.data.results[0],
      genres: responseGenres.data.genres
    });
  };

  getUpcomingMovies = pageNumber =>
    moviedatabase.get("/movie", {
      params: {
        pageNumber: pageNumber,
        language: "en-US"
      }
    });

  getGenres = () =>
    moviedatabase.get("/genre", {
      params: {
        language: "en-US"
      }
    });

  searchMovies = (text, pageNumber = 1) =>
    moviedatabase.get("/movie/search", {
      params: {
        query: text,
        pageNumber: pageNumber,
        language: "en-US"
      }
    });

  loadMovies = async pageNumber => {
    if (pageNumber === 1 && this.state.textMovie === "") {
      this.initState();
    } else {
      let responseMovies = null;
      if (this.state.textMovie === "")
        responseMovies = await this.getUpcomingMovies(pageNumber);
      else
        responseMovies = await this.searchMovies(
          this.state.textMovie,
          pageNumber
        );
      if (responseMovies.data.total_pages === pageNumber) {
        this.setState({ hasMoreItems: false });
      } else {
        this.setState({
          movies: [...this.state.movies, ...responseMovies.data.results]
        });
      }
    }
  };

  loadBackgroundImage = () => {
    let imgURL = null;
    if (
      this.state.movieSelected &&
      isMobile &&
      this.state.movieSelected.poster_path
    ) {
      imgURL = `${IMAGE_BASE_URL}original/${
        this.state.movieSelected.poster_path
      }`;
    } else if (
      this.state.movieSelected &&
      this.state.movieSelected.backdrop_path
    ) {
      imgURL = `${IMAGE_BASE_URL}original/${
        this.state.movieSelected.backdrop_path
      }`;
    }
    if (imgURL) {
      return (
        <img
          src={imgURL}
          className="background-full"
          alt={this.state.movieSelected.title}
        />
      );
    }
    return imgURL;
  };

  onMovieClick = movie => {
    this.setState(
      {
        movieSelected: movie
      },
      () => {
        this.scrollToElement();
      }
    );
  };

  onSearchSubmit = async text => {
    this.resetPageNumber();
    let responseMovies = null;
    if (text === "") responseMovies = await this.getUpcomingMovies(1);
    else responseMovies = await this.searchMovies(text);
    if (
      responseMovies.data.results &&
      responseMovies.data.results.length === 0
    ) {
      this.setState({
        movies: [],
        movieSelected: null,
        textMovie: text,
        hasMoreItems: false
      });
    } else {
      this.setState({
        movies: responseMovies.data.results,
        movieSelected: responseMovies.data.results[0],
        textMovie: text,
        hasMoreItems: true
      });
    }
  };

  resetPageNumber = () => {
    this.setState({
      pageStart: this.state.pageStart === 0 ? -1 : 0
    });
  };

  scrollToElement = () => {
    window.scrollTo(0, this.elementRef.current.offsetTop);
  };

  render() {
    return (
      <main className="ui" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.loadBackgroundImage()}
        <div ref={this.elementRef}>
          <MovieDetail
            movieSelected={this.state.movieSelected}
            genres={this.state.genres}
          />
        </div>
        <InfiniteScrollExtend
          pageStart={this.state.pageStart}
          loadMore={this.loadMovies}
          hasMore={this.state.hasMoreItems}
          loader={
            <div key={0}>
              <Loader />
            </div>
          }
        >
          <MovieList
            movies={this.state.movies}
            genres={this.state.genres}
            onMovieClick={this.onMovieClick}
          />
        </InfiniteScrollExtend>
      </main>
    );
  }
}

export default App;
