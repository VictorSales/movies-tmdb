package com.victor.arctouchmovies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ArctouchMoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArctouchMoviesApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	@Configuration
	@EnableWebMvc
	public class WebConfig implements WebMvcConfigurer {
	    @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**");
	    }
	}
}
