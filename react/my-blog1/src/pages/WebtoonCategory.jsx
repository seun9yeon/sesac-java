import React from 'react';
import { Link } from 'react-router-dom';

export default function WebtoonCategory() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/mon">월</Link>
          </li>
          <li>
            <Link to="/tue">화</Link>
          </li>
          <li>
            <Link to="/wed">수</Link>
          </li>
          <li>
            <Link to="/thu">목</Link>
          </li>
          <li>
            <Link to="/fri">금</Link>
          </li>
        </ul>
      </header>
      <div>WebtoonCategory</div>
      <div>
       <script></script>
      </div>
    </>
  );
}
