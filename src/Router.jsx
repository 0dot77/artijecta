import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import Home from './pages/Home';
import AllPublic from './pages/AllPublic';
import Description from './pages/Description';

export default function Router() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
