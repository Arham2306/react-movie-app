import MovieCard from "../components/MovieCard"

function Home() {

  const movies = [
      {id: 1, title: "John Wick", release_date: "2022"},
      {id: 2, title: "Spiderman", release_date: "2011"},
      {id: 3, title: "The Matrix", release_date: "1997"},
    ]

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}