import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";

import { LuSearch } from "react-icons/lu";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch=useDispatch()
  const submitHandeller = (e) => {
    if(term==="") return alert("Please Enter Search Term")
    e.preventDefault();
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie Logo </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandeller}>
          <input
            type="text"
            value={term}
            onChange={(e) =>setTerm(e.target.value)}
            placeholder="Search Movie or Shows"
          />
          <button type="submit">
            <LuSearch/>
          </button>{" "}
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
