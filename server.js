const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const routes = require('./api/routes');

routes(app);
app.listen(port, function () {
  console.log("start server on 3000")
})