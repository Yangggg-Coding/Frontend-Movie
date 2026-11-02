export default function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("OUCH");
  }
  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          {movie.url ? (
            <img src={movie.url} alt={`${movie.title} poster`} />
          ) : (
            <div className="movie-poster-placeholder" aria-label={`No poster for ${movie.title}`}>
              <span>{movie.title}</span>
            </div>
          )}
          <div className="movie-overlay">
            <button
              className="favorite-btn"
              type="button"
              onClick={onFavoriteClick}
              aria-label={`Add ${movie.title} to favorites`}
            />
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </>
  );
}
