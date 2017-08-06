import React from "react";
import Link from "next/link";

export default () =>
  <ul>
    <li>
      <Link as="/item">
        <a>View Item</a>
      </Link>
    </li>
    <li>
      <Link href="/abc">
        <a>ABC</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </li>
    <li>
      <Link as="/find">
        <a>Find Item</a>
      </Link>
    </li>
    <li>
      <Link href="/form">
        <a>Get Form</a>
      </Link>
    </li>
  </ul>;
