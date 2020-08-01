const axios = require('axios');
require('dotenv/config');

const gifApiKey = process.env.GIF_API_KEY;
const gifRequest = (gifApiUrl, recipeName) => axios.get(`${gifApiUrl}?q=${recipeName}&api_key=${gifApiKey}&limit=1`);

module.exports = {
  gifRequest,
};
