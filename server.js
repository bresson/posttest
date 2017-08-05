const express = require("express");
const next = require("next");
const api = require("./operations/get-item");
const dbSearch = require("./operations/find-item");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB || "mongodb://localhost/test");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("connected", () => {
  console.log("connected to mongodb");
});

app.prepare().then(() => {
  const server = express();

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

  server.get("/abc", (req, res) => {
    res.render(req, res, "/abc", req.query);
  });

  // Serve the about page with next.js as renderer
  server.get("/about", (req, res) => {
    res.render(req, res, "/about", req.query);
  });

  // Find items in mongodb
  server.get("/find", (req, res) => {
    const foundItems = dbSearch.findItems();
    res.render(req, res, "/find", { foundItems });
  });

  // When rendering client-side, we will request the same data from this route
  server.get("/_data/findItems", (req, res) => {
    const items = dbSearch.findItems();
    items.then(foundItems => {
      console.log("Found docs: ", foundItems[0]);
      res.json(foundItems[0]);
    });
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
