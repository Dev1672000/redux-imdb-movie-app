import React, { useEffect } from "react";
import "./MovieDetails.scss";
import { useParams } from "react-router-dom";
import { FaCalendarDays, FaPhotoFilm, FaStar } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieDetails,
  getSelectedMoviesOrShow,
  removeSelectedMoveOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";
const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMoviesOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(imdbID));
    return () => {
      dispatch(removeSelectedMoveOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-selection">
      {Object.keys(data).length === 0 ? (
        <div>Loading .....</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <FaStar color="#ff9e00" />
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes <GoThumbsup color="#fafafa" />
                {data.imdbVotes}
              </span>
              <span>
                Runtime <FaPhotoFilm color="#c7c10c" />
                {data.Runtime}
              </span>
              <span>
                Year <FaCalendarDays color="peachpuff" />
                {data.Year}
              </span>
            </div>
            <div className="movie-plot">
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
