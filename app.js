const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set(`view engine`, `ejs`); // le pedimos a ejs que nos renderise 

app.use(`/`, function (req, res, next) {
  console.log(`Request Url:` + req.url);
  next();
});

app.get(`/number/:id`, function (req, res) {
  res.render(`number`, { ID: req.params.id });
});// hacemos una ruta normal como las de siempre en este caso cambiando el nombre person por number solo para simbolizar que nos daran un numero, manteniendo el parametro id

app.listen(port);
