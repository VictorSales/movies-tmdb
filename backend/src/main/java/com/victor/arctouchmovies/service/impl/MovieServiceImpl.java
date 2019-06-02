package com.victor.arctouchmovies.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.victor.arctouchmovies.model.MovieList;
import com.victor.arctouchmovies.service.IMovieService;
import com.victor.arctouchmovies.util.Constants;

@Service
public class MovieServiceImpl implements IMovieService {
	private RestTemplate restTemplate;

	@Autowired
	public MovieServiceImpl(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	@Override
	public MovieList findAll(Integer pageNumber, String language) {
		UriComponentsBuilder uriBuilder = UriComponentsBuilder
			    .fromUriString(Constants.TMDB_URL + "/movie/upcoming")
			    .queryParam("api_key", Constants.TMBD_API_KEY)
			    .queryParam("page", pageNumber)
			    .queryParam("language", language);
		return restTemplate.getForObject(uriBuilder.toUriString(), MovieList.class);
	}

	@Override
	public MovieList findByName(String query, Integer pageNumber, String language) {
		UriComponentsBuilder uriBuilder = UriComponentsBuilder
			    .fromUriString(Constants.TMDB_URL + "/search/movie")
			    .queryParam("api_key", Constants.TMBD_API_KEY)
			    .queryParam("page", pageNumber)
			    .queryParam("language", language)
			    .queryParam("query", query);
		return restTemplate.getForObject(uriBuilder.toUriString(), MovieList.class);
	}

}
