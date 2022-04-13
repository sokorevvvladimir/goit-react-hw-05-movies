import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Layout from './Layout';

const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <Container>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
  );
};
