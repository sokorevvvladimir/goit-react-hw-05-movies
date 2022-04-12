import { useState, useEffect } from 'react';
import { fetchMoviesById } from '../services/fetcherAPI';
import MovieDetails from '../components/MovieDetails';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const item = await fetchMoviesById(movieId);
        setItem(item);
      } catch (error) {}
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      <div>Movie details here {movieId}</div>
      {item && <MovieDetails item={item} />}
    </>
  );
};

export default MovieDetailsPage;
