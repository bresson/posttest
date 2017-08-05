import React from "react";
import Link from "next/link";

export default () =>
  <div>
    <h1>Welcome to the abc route.</h1>
    <ul>
      <li>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </li>
    </ul>
  </div>;
