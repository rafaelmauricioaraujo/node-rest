const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("listen on port 3000");
});

app.get("/service", (req, res) => {
  res.send("service started. get endpoint");
});