import MovieCard from "../components/MovieCards";
import { useState } from "react";

export default function Home() {
  const movies = [{ id: 1, title: "John Wick", release_date: 2026 }];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (h) => {
    h.preventDefault();
  };
  return (
    <>
      <div className="home">
        <form action="" onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movie ..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="movie-grid">
          {movies.map(
            (movie) =>
              movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              ),
          )}
        </div>
      </div>
    </>
  );
}
