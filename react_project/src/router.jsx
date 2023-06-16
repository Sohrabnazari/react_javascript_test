import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './routes/layout';
import Table from './routes/table';
import Searchbar from './routes/searchbar';
import Chart from './routes/searchbar/chart';

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
    element: <Searchbar />,
  },
  {
    path: '/searchbar/:id',
    element: <Chart />,
  },
];

const router = createBrowserRouter(routes);

export default router;