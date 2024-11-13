import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function RootLayout() {
  return (
    <>
      <header>
        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <Link to="/">Home으로</Link>
          </li>
          <li>
            <Link to="/">게시글로</Link>
          </li>
          <div>Home</div>
        </ul>
      </header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </>
  );
}
