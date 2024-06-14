const express = require("express");
const cors = require("cors");
const bookRouter = require("./routes/bookRouter");

const app = express();
app.set("view engine", "ejs");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/api/books", bookRouter);

module.exports = app;
