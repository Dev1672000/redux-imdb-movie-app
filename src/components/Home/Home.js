import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {  fetchAsyncMovies,fetchAsyncShows } from "../../features/movies/movieSlice";
const Home = () => {
  const disPatch = useDispatch();
  const movieText="Harry";
  const showText="friends";

  useEffect(() => {
    disPatch(fetchAsyncMovies(movieText));
    disPatch(fetchAsyncShows(showText));
  }, [disPatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
