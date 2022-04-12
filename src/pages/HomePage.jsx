import { Link } from 'react-router-dom';
import useFetchHomeMovies from '../hooks/useFetchHomeMovies';
import styled from 'styled-components';
import Loader from '../components/Loader';

const StyledDiv = styled.div`
  font-size: 26px;
  font-weight: 600;
`;

const StyledLi = styled.li`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

const HomePage = () => {
  const { movies, isLoading } = useFetchHomeMovies();

  return (
    <>
      <StyledDiv>Trending today</StyledDiv>
      {isLoading && <Loader />}
      <ul>
        {movies.map(movie => (
          <StyledLi key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </StyledLi>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
