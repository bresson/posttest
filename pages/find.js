import { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-fetch";

export default class Find extends Component {
  static async getInitialProps({ req, query }) {
    const isServer = !!req;

    console.log("getInitialProps called:", isServer ? "server" : "client");

    if (isServer) {
      // When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
      // saving us an http call. Note that if we were to try to require('../operations/get-item') here,
      // it would result in a webpack error.
      return { items: query.items };
    } else {
      // On the client, we should fetch the data remotely
      const res = await fetch("/_data/findItems", {
        headers: { Accept: "application/json" }
      });
      const json = await res.json();
      return { items: json };
    }
  }

  render() {
    const itemRows = this.props.items.map((item, idx) =>
      <div>
        <p>Found Item:</p>
        <h1>
          {item.title}
        </h1>
        <h2>
          {item.subtitle} - {item.seller}
        </h2>
      </div>
    );

    return (
      <div className="item">
        <div>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </div>
        <div>
          {itemRows}
        </div>
      </div>
    );
  }
}
