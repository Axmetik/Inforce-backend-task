const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./index");
const DB = process.env.DATABASE.replace(
  "<USERNAME>:<PASSWORD>",
  `${process.env.USER}:${process.env.PASSWORD}`
);

mongoose.connect(DB).then(() => {
  console.log("DB connection successful");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
