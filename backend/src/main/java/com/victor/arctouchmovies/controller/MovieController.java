package com.victor.arctouchmovies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.victor.arctouchmovies.model.MovieList;
import com.victor.arctouchmovies.service.IMovieService;
import com.victor.arctouchmovies.util.Constants;

@RestController
@RequestMapping(value = Constants.BASE_URL + "/movie")
public class MovieController {
	private IMovieService movieService;

	@Autowired
	public MovieController(IMovieService movieService) {
		this.movieService = movieService;
	}

	@GetMapping
	public MovieList findAll(@RequestParam Integer pageNumber, @RequestParam String language) {
		return movieService.findAll(pageNumber, language);
	}

	@GetMapping(value = "/search")
	public MovieList findByName(@RequestParam String query, @RequestParam Integer pageNumber, String language) {
		return movieService.findByName(query, pageNumber, language);
	}
}
