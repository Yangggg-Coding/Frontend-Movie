import { useMovieContext } from "../context/MovieContext";
export default function MovieCard({ movie }) {
  const { isFavorites, addToFavorites, removeFromFavorites } =
    useMovieContext();
  const favorites = isFavorites(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorites) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }
  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          ) : (
            <div
              className="movie-poster-placeholder"
              aria-label={`No poster for ${movie.title}`}
            >
              <span>{movie.title}</span>
            </div>
          )}
          <div className="movie-overlay">
            <button
              className={`favorite-btn ${favorites ? "active" : ""}`}
              type="button"
              onClick={onFavoriteClick}
              aria-label={`Add ${movie.title} to favorites`}
            />
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}
