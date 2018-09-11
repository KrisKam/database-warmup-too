const express = require("express");
const app = express();
const host = process.env.POST || 3000;

app.listen(host, () => console.log(`Listening on port ${host}`));

app.get("/", (req, res) => {
  res.send("Request sent")
})