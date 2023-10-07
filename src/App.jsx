import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="movies/:type" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
