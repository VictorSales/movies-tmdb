package com.victor.arctouchmovies.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class MovieList {
	@JsonProperty(value = "results")
	private List<Movie> movies;
	@JsonProperty(value = "total_pages")
	private Integer totalPages;
	@JsonProperty(value = "total_results")
	private Integer totalResults;
	 
    public MovieList() {
        movies = new ArrayList<>();
    }
}
