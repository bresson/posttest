import React from "react";
import Link from "next/link";

export default () =>
  <div>
    <h1>About</h1>
    <ul>
      <li>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
      excepturi, placeat quas suscipit praesentium quod illum molestias? Non
      blanditiis magni vel mollitia eius. Inventore odio eligendi beatae ea,
      ratione maiores?
    </p>
  </div>;
