const express = require('express');

const api = express();

const app = api.listen(process.env.PORT || 8000, () => {
  console.log('api not yet implemented');
});

module.exports = app;
