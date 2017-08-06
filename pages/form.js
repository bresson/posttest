import { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-fetch";

export default class Insert extends Component {
  render() {
    return (
      <div className="item">
        <div>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </div>
        <div>
          <form method="post" action="/insert">
            <div>
              <label for="title">Title</label>
              <input name="title" type="text" />
            </div>
            <div>
              <label for="subtitle">Subtitle</label>
              <input name="subtitle" type="text" />
            </div>
            <div>
              <label for="seller">Seller</label>
              <input name="seller" type="text" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
