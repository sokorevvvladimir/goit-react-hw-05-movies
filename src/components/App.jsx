import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import MovieCastSubPage from 'pages/MovieCastSubPage';
import MovieReviewsSubPage from 'pages/MovieReviewsSubPage';
import Layout from './Layout';

const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
`;

export const App = () => {
  const [item, setItem] = useState({});

  const itemFetcher = data => {
    setItem(data);
  };

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies/" element={<MoviesPage />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetailsPage itemFetcher={itemFetcher} />}
          >
            <Route
              path="/movies/:movieId/cast"
              element={<MovieCastSubPage item={item} />}
            />
            <Route
              path="/movies/:movieId/reviews"
              element={<MovieReviewsSubPage item={item} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Container>
  );
};
