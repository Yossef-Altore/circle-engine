const express = require("express");
const hbs = require("hbs");
const path = require("path");

// the port
const port = process.env.PORT || 3000;

// the paths
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const app = express();

//define handlebar and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//static folder
app.use(express.static(publicDirPath));

// set index page

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/playGround", (req, res) => {
  res.render("playGround");
});

app.listen(port, () => {
  console.log("server is listening on port " + port);
});
