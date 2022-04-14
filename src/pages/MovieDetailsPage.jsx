import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/fetcherAPI';
import MovieDetails from '../components/MovieDetails';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
`;

const Button = styled.button`
  border: 2px solid #ffffff;
  background-color: #b5bdf0;
  border-radius: 3px;
  height: 30px;
  margin-bottom: 20px;
  position: sticky;
  top: 80px;

  &:hover {
    background-color: #a8b4ff;
  }
`;

const MovieDetailsPage = ({ itemFetcher }) => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const item = await fetchMovieDetails(movieId);
        setItem(item);
      } catch (error) {
        toast.error('Movie not found');
        return;
      }
    };

    fetchMovie();
  }, [movieId]);

  itemFetcher(item);
  console.log(item);

  return (
    <>
      <Button type="button">
        <Link to="/">← Go back</Link>
      </Button>
      {item && <MovieDetails item={item} />}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
