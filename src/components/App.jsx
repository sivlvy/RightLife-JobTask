import SharedLayout from './SharedLayout/SharedLayour';
import HomePage from './pages/HomePage';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
