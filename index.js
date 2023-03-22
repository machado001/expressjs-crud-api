const express = require("express"),
  app = express(),
  cors = require("cors"),
  apiRouter = require("./routes/api"),
  PORT = process.env.PORT || 3031;

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

module.exports = app.listen(PORT, () => console.log("PORT", PORT));
