package com.victor.arctouchmovies.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Movie {
	private Integer id;
	@JsonProperty(value = "vote_count")
	private Integer voteCount;
	private Boolean video;
	private Boolean adult;
	@JsonProperty(value = "original_title")
	private String originalTitle;
	@JsonProperty(value = "original_language")
	private String originalLanguage;
	private String title;
	@JsonProperty(value = "backdrop_path")
	private String backdropPath;
	private String originalImageURL;
	@JsonProperty(value = "poster_path")
	private String posterPath;
	private String overview;
	@JsonProperty(value = "release_date")
	private String releaseDate;
	private Float popularity;
	@JsonProperty(value = "vote_average")
	private Float voteAverage;
	@JsonProperty(value = "genre_ids")
	private List<Integer> listGenreIds;

	public Movie() {
	}
}
