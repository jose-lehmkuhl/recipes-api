const express = require('express');

const api = express();

api.use(require('./routes/recipes'));

const app = api.listen(process.env.PORT || 8000, () => {
  console.log('server listening at port 8000');
});

module.exports = app;
