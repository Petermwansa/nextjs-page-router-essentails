//our-domain.com/news

import { Fragment } from "react";
import Link from 'next/link'

function NewsPage() {
    return (
      <Fragment>
        <h1>News Page</h1>
        <ul>
          <li>
            <Link href='/news/great'>
              Next JS is Great
            </Link>
          </li>
          <li>Next JS is The Greatest</li>
        </ul>
      </Fragment>
    )
}

export default NewsPage;