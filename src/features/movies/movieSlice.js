import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApis from "../../common/apis/MovieApis";
import { APIKey } from "../../common/apis/MovieApiKeys";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async(term)=>{

   const response = await MovieApis.get(
     `?apikey=${APIKey} &s=${term}&type=movie`
   )
   return   response.data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {
  
  const response = await MovieApis.get(
    `?apikey=${APIKey} &s=${term}&type=series`
  );
  return response.data;
});
export const fetchAsyncMovieDetails = createAsyncThunk(
  "movies/fetchAsyncMovieDetails",
  async (id) => {
    const response = await MovieApis.get(
      `?apikey=${APIKey} &i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows:[],
  selectedMovieShow:{}
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMoveOrShow:(state)=>{
      state.selectedMovieShow={}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled fetched");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected fetched");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fulfilled fetched");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieDetails.fulfilled]: (state, { payload }) => {
      console.log("fulfilled fetched");
      return { ...state, selectedMovieShow: payload };
    },
  },
});

export const { removeSelectedMoveOrShow } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMoviesOrShow = (state) => state.movies.selectedMovieShow;
export default moviesSlice.reducer;
