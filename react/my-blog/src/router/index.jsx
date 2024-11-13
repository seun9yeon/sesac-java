import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PostList from '../pages/PostList';
import RootLayout from '../RootLayout';
import PostDetail from '../../../react_router/src/pages/PostDetail';
import NotFound from '../../../react_router/src/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/posts',
        element: <PostList />,
      },
      {
        path: '/posts/:postId',
        element: <PostDetail />,
      },
    ],
  },
]);

export default router;
