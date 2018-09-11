const express = require("express");
const app = express();
const host = process.env.POST || 3000;
const queries = require("./queries");

app.listen(host, () => console.log(`Listening on port ${host}`));

app.get("/", (req, res) => {
  queries.getAll()
  .then(response => res.send(response));
})