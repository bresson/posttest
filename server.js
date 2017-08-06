const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const api = require("./operations/get-item");
const insertItem = require("./operations/insert-item");

const Data = require("./data/Data");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB ||
    `mongodb://${process.env.DB_USER}:${process.env
      .DB_PW}@ds111922.mlab.com:11922/nextjs`
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("connected", () => {
  console.log("connected to mongodb");
});

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  // Set up home page as a simple render of the page.
  server.get("/", (req, res) => {
    console.log("Render home page");
    return app.render(req, res, "/", req.query);
  });

  // Serve the item webpage with next.js as the renderer
  server.get("/item", (req, res) => {
    const itemData = api.getItem();
    app.render(req, res, "/item", { itemData });
  });

  // When rendering client-side, we will request the same data from this route
  server.get("/_data/item", (req, res) => {
    const itemData = api.getItem();
    res.json(itemData);
  });

  server.get("/find", (req, res) => {
    Data.find({}, (err, items) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log("Finding docs Server-side: ", items);

      app.render(req, res, "/find", { items });
    });
  });

  // When rendering client-side, we will request the same data from this route
  server.get("/_data/findItems", (req, res) => {
    Data.find({}, (err, items) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log("Finding docs: ", items);

      return res.json(items);
    });
  });

  // Post data to mongodb
  server.post("/insert", (req, res) => {
    insertItem.setItems(req.body);
    app.render(req, res, "/index", req.query);
  });

  // Fall-back on other next.js assets.
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
