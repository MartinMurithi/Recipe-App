require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dbConnect = require("./config/dbConnect");
const { logger, logEvents } = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes/recipeRoutes");

const app = express();
const PORT = process.env.PORT || 8500;

dbConnect();

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", router);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "Resource you requested does not exist" });
  } else {
    res.type("text").send("Resource you requested does not exist");
  }
});

app.use(errorHandler);

// listen to db connection
mongoose.connection.once("open", () => {
  console.log("Database connected successfully");
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

// Listen to db error events
mongoose.connection.on("error", (err) => {
  logEvents(
    `${err.errno}\t${err.code}\t${err.syscall}\t${err.hostname}`,
    "dbErrLog.log"
  );
});
