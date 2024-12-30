import { BrowserRouter, Routes, Route } from 'react-router';
import { routes } from './route';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
