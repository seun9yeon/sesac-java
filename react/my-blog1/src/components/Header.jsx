import React from 'react';

export default function Header() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/webtoon">웹툰</Link>
          </li>
          <li>
            <Link to="/novel">소설</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
