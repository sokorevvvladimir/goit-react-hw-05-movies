import styled from 'styled-components';

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
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    videos,
  } = item;

  const videosArray = videos.results;
  const videoObject = videosArray.find(v => v.type === 'Trailer');
  const id = videoObject.key;

  return (
    <StyledDiv>
      <img src={`${BASE_URL}${poster_path}`} alt={original_title} width="500" />
      <ContentDiv>
        <h1>{`${original_title} (${Number.parseInt(release_date)})`}</h1>
        <StyledP>User Score: {vote_average}</StyledP>
        <h2>Overview</h2>
        <StyledP>{overview}</StyledP>
        <h3>Genres</h3>
        <StyledP>
          {genres.map(genre => (
            <span key={genre.id}>{`${genre.name} `}</span>
          ))}
        </StyledP>
        {id && (
          <>
            <h4>Trailer</h4>
            <iframe
              width="560"
              height="315"
              title="movieTrailer"
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </>
        )}
      </ContentDiv>
    </StyledDiv>
  );
};

export default MovieDetails;
