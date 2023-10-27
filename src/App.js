import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
