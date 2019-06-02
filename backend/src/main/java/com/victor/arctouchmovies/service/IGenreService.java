package com.victor.arctouchmovies.service;

import com.victor.arctouchmovies.model.GenreList;

public interface IGenreService {
	GenreList findAll(String language);
}
