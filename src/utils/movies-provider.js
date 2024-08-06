"use client";

import { getMovies, getMoviesDiscover, getMoviesOrderBy, getMoviesSearch, getMoviesSection } from "@/libs/funtions";
import { createContext, useContext, useState } from "react";


const defaultValue = {

};

const MovieContext = createContext();

export const MoviesProvider = ({ children }) => {

  const [movies, setMovies] = useState()

  async function moviesCategoty(genre, page) {
    let Nmovies = await getMovies(genre, page)
    setMovies(Nmovies)
  }

  async function getMoviesSearching(query, page) {
    const pelis = await getMoviesSearch(query, page)
    setMovies(pelis)
  }

  async function getMovSort(category, page, sort, genre) {
    const mov = await getMoviesOrderBy(category, page, sort, genre)
    setMovies(mov)
  }

  async function getMovieDiscovery(page, sort, genre) {
    const mov = await getMoviesDiscover(page, sort, genre)
    setMovies(mov)
  }

  const values = { movies, setMovies, moviesCategoty, getMovSort, getMovieDiscovery, getMoviesSearching }

  return (
    <MovieContext.Provider value={values}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);

