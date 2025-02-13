const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, this is My First Server");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Start Server!');
});
