const express = require("express");
const app = express();
const port = 3000;

// Import your package
const site = require("my-web-package");
const website = site.getWebsite();

// Serve CSS
app.get("/style.css", (req, res) => {
  res.type("text/css");
  res.send(website.css);
});

// Serve JS
app.get("/script.js", (req, res) => {
  res.type("application/javascript");
  res.send(website.js);
});

// Serve HTML
app.get("/", (req, res) => {
  res.send(website.html);
});

app.listen(port, () => {
  console.log(`Website running at http://localhost:${port}`);
});
