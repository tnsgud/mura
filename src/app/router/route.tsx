import LoginPage from '@pages/login';
import ProjectsPage from '@pages/projects';

export const routes = [
  { path: '/', element: <LoginPage /> },
  { path: '/projects', element: <ProjectsPage /> },
];
