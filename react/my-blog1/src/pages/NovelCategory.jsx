import React from 'react';
import { Link } from 'react-router-dom';

export default function NovelCategory() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/genre1">로맨스</Link>
          </li>
          <li>
            <Link to="/genre2">판타지</Link>
          </li>
          <li>
            <Link to="/genre3">액션</Link>
          </li>
          <li>
            <Link to="/genre4">일상</Link>
          </li>
          <li>
            <Link to="/genre5">스릴러</Link>
          </li>
        </ul>
      </header>
      <div>NovelCategory</div>
    </>
  );
}
