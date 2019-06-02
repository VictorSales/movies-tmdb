package com.victor.arctouchmovies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.victor.arctouchmovies.model.GenreList;
import com.victor.arctouchmovies.service.IGenreService;
import com.victor.arctouchmovies.util.Constants;

@RestController
@RequestMapping(value = Constants.BASE_URL + "/genre")
public class GenreController {
	private IGenreService genreService;

	@Autowired
	public GenreController(IGenreService genreService) {
		this.genreService = genreService;
	}

	@GetMapping
	public GenreList findAll(@RequestParam String language) {
		return genreService.findAll(language);
	}
}
