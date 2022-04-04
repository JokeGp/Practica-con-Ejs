const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set(`view engine`, `ejs`);

app.use(`/`, function (req, res, next) {
  console.log(`Request Url:` + req.url);
  next();
});

app.get(`/number/:id`, function (req, res) {
  res.render(`number`, { ID: req.params.id });
});

app.listen(port);
