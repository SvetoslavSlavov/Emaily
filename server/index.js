const express = require("express");
const app = express();

// Route handler with express
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
/**
 * Use it in production enviroment or in development
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT);
