import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/layout',
    element: <App />,
  },
  {
    path: '/table',
    element: <App />,
  },
  {
    path: '/searchbar',
    element: <App />,
  },
];

const router = createBrowserRouter(routes);

export default router;