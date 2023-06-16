import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './routes/layout';
import Table from './routes/table';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/layout',
    element: <Layout />,
  },
  {
    path: '/table',
    element: <Table />,
  },
  {
    path: '/searchbar',
    element: <App />,
  },
];

const router = createBrowserRouter(routes);

export default router;