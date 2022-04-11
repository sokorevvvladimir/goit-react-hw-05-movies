import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return <div>Movie details here {movieId}</div>;
};

export default MovieDetailsPage;
