import React from "react";
import Link from "next/link";

export default () =>
  <ul>
    <li>
      <a href="/item">View Item</a>
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
      <a href="/find">Find Items</a>
    </li>
    <li>
      <Link href="/form">
        <a>Get Form</a>
      </Link>
    </li>
    <li>
      <Link href="/loginform">
        <a>Login</a>
      </Link>
    </li>
    <li>
      <a href="/logout">Log Out</a>
    </li>
  </ul>;
