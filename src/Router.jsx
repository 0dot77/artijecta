import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPublic from './pages/AllPublic';
import Description from './pages/Description';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';

const LoadingPage = lazy(() => import('./pages/LoadingPage'));
const Home = lazy(() => import('./pages/Home'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route
            path="/"
            element={<LoadingPage />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/all-public"
            element={<AllPublic />}
          />
          <Route
            path="/description"
            element={<Description />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
