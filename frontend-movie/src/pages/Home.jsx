import MovieCard from "../components/MovieCards";
import { useState } from "react";

export default function Home() {
  const movies = [{ id: 1, title: "John Wick", release_date: 2026 }];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase()),
  );

  const handleSearch = (h) => {
    h.preventDefault();
  };
  return (
    <section className="home-page" aria-labelledby="home-title">
      <header className="page-heading">
        <p className="page-kicker">A little something for movie night</p>
        <h1 id="home-title">Find your next favorite</h1>
        <p className="page-description">
          Browse the collection and keep track of the films you want to see.
        </p>
      </header>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form" role="search">
          <input
            type="text"
            aria-label="Search movies by title"
            placeholder="Search by movie title"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <section aria-labelledby="movie-list-title">
          <div className="section-heading">
            <h2 id="movie-list-title">Movies</h2>
            <span className="result-count">
              {filteredMovies.length} {filteredMovies.length === 1 ? "film" : "films"}
            </span>
          </div>
          {filteredMovies.length > 0 ? (
            <div className="movie-grid">
              {filteredMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-state-icon" aria-hidden="true">
                ⌕
              </span>
              <h2>No movies found</h2>
              <p>Try another title and we’ll see if it’s in the collection.</p>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
