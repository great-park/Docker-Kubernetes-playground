import express from "express";

import connectToDatabase from "./helpers.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi there!</h2>");
});

//NodeJs 14 버전 이상에서만 작동
await connectToDatabase();

app.listen(3000, () => {
  console.log("server is listening at 3000");
});
