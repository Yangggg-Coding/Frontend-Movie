import { Link } from "react-router-dom";

export default function Favorites() {
  return (
    <section className="favorites-page" aria-labelledby="favorites-title">
      <header className="page-heading">
        <p className="page-kicker">Your personal watchlist</p>
        <h1 id="favorites-title">Favorites</h1>
        <p className="page-description">
          The movies you’ve saved for later will find a home here.
        </p>
      </header>
      <div className="empty-state">
        <span className="empty-state-icon" aria-hidden="true">
          ♡
        </span>
        <h2>No favorites just yet</h2>
        <p>When you find a movie you love, save it and it’ll show up here.</p>
        <Link className="empty-state-link" to="/">
          Browse movies
        </Link>
      </div>
    </section>
  );
}