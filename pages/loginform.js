import { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-fetch";

export default class Login extends Component {
  render() {
    return (
      <div className="item">
        <div>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </div>
        <div>
          <form method="post" action="/login">
            <div>
              <label for="username">Username</label>
              <input name="username" type="text" />
            </div>
            <div>
              <label for="password">Password</label>
              <input name="password" type="password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
