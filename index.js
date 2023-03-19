const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/api");

const { join } = require("path");

const PORT = process.env.PORT || 3031;

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);
app.use(express.static(join(__dirname, "public")));

app.listen(PORT, () => console.log("PORT", PORT));

