package com.victor.arctouchmovies.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.victor.arctouchmovies.model.GenreList;
import com.victor.arctouchmovies.service.IGenreService;
import com.victor.arctouchmovies.util.Constants;

@Service
public class GenreServiceImpl implements IGenreService{
	private RestTemplate restTemplate;

	@Autowired
	public GenreServiceImpl(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	@Override
	public GenreList findAll(String language) {
		UriComponentsBuilder uriBuilder = UriComponentsBuilder
			    .fromUriString(Constants.TMDB_URL + "/genre/movie/list")
			    .queryParam("api_key", Constants.TMBD_API_KEY)
				.queryParam("language", language);
		
		return restTemplate.getForObject(uriBuilder.toUriString(), GenreList.class);
	}
}
