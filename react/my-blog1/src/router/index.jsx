import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import WebtoonCategory from '../pages/WebtoonCategory';
import NovelCategory from '../pages/NovelCategory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/webtoon',
        element: <WebtoonCategory />,
      },
      {
        path: '/novel',
        element: <NovelCategory />,
      },
    ],
  },
]);

export default router;
