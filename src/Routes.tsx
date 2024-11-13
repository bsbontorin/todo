import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home.page';
import { Other } from './pages/Other.page';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/other' element={<Other />} />

        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
