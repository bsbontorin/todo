import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Other } from './pages/Other';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}
