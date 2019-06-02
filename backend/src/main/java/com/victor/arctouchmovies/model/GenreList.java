package com.victor.arctouchmovies.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class GenreList {
	private List<Genre> genres;
	 
    public GenreList() {
        genres = new ArrayList<>();
    }
}
