import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
  background-color: #e2e3e9;
  padding: 20px;
  border-radius: 3px;
  &:nth-child(2n) {
    background-color: #d1d6fa;
  }
`;

const StyledUl = styled.ul`
  padding-inline-start: 0;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const DivForMargin = styled.div`
  margin-left: 20px;
`;

const StyledP = styled.p`
  font-weight: 500;
`;

const MovieCastSubPage = ({ item }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w300/';

  const { credits } = item;
  const actors = credits?.cast;

  return (
    <StyledUl>
      {actors.map(actor => (
        <StyledLi key={actor.id}>
          <StyledDiv>
            {!actor.profile_path && (
              <StyledP>
                NO IMAGE
                <br /> AVAILABLE
              </StyledP>
            )}
            {actor.profile_path && (
              <img
                src={`${BASE_URL}${actor.profile_path}`}
                alt={`actor.name`}
                width="100"
              />
            )}
            <DivForMargin>
              <StyledP>Actor name: {actor.name}</StyledP>
              {actor.character && (
                <StyledP>Character: {actor.character}</StyledP>
              )}
            </DivForMargin>
          </StyledDiv>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default MovieCastSubPage;
