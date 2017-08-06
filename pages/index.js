import React from "react";
import Link from "next/link";

export default () =>
  <ul>
    <li>
      <Link href="/item" as="/object">
        <a>View Item</a>
      </Link>
    </li>
    <li>
      <a href="/abc">ABC</a>
    </li>
    <li>
      <a href="/about">About Page</a>
    </li>
    <li>
      <Link href="/find" as="/objecttwo">
        <a>Find Item</a>
      </Link>
    </li>
    <li>
      <a href="/form">Get Form</a>
    </li>
  </ul>;
