package com.victor.arctouchmovies.service;

import com.victor.arctouchmovies.model.MovieList;

public interface IMovieService {
	MovieList findAll(Integer pageNumber, String language);
	MovieList findByName(String query, Integer pageNumber, String language);
}
