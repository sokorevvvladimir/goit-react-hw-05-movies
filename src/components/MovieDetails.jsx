import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchGenres } from '../services/fetcherAPI';

const StyledDiv = styled.div`
  display: flex;
`;

const ContentDiv = styled.div`
  margin-left: 30px;
`;

const StyledP = styled.p`
  font-weight: 500;
`;

const MovieDetails = ({ item }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w300/';
  let movieCardGenres = [];

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genre_ids,
  } = item;
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const genreFinder = async () => {
      const result = await fetchGenres();
      setGenres(result.data.genres);
    };

    genreFinder();
  }, []);

  const genresCompiler = () => {
    genre_ids.forEach(genre_id => {
      const result = genres.filter(genre => genre.id === genre_id);

      const [res] = result;
      if (res) {
        movieCardGenres.push(res.name);
      }
      return res;
    });
  };

  genresCompiler();

  return (
    <StyledDiv>
      <img src={`${BASE_URL}${poster_path}`} alt={original_title} />
      <ContentDiv>
        <h1>{`${original_title} (${Number.parseInt(release_date)})`}</h1>
        <StyledP>User Score: {vote_average}</StyledP>
        <h2>Overview</h2>
        <StyledP>{overview}</StyledP>
        <h3>Genres</h3>
        <StyledP>{movieCardGenres.join(' ')}</StyledP>
      </ContentDiv>
    </StyledDiv>
  );
};

export default MovieDetails;
