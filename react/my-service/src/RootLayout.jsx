import React from 'react'
import { Link, Outlet }
export default function RootLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to = "/webtoon">웹툰으로</Link>
          </li>
          <li>
            <Link to = "/novel">소설로</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}
