const axios = require('axios');
require('dotenv/config');

const gifApiKey = process.env.GIF_API_KEY;
const defaultErrorHandling = (api) => ({
  status: 500,
  error: `External ${api} api Error`,
});

const gifRequest = (gifApiUrl, recipeName) => axios.get(`${gifApiUrl}?q=${recipeName}&api_key=${gifApiKey}&limit=1`).catch(() => defaultErrorHandling('gif'));
const recipeRequest = (recipesApiUrl, ingredients) => axios.get(`${recipesApiUrl}?i=${ingredients}`).catch(() => defaultErrorHandling('recipe'));

module.exports = {
  gifRequest,
  recipeRequest,
};
