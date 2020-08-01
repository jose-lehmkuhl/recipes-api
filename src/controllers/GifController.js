const { gifRequest } = require('../services/axios');

const GifController = {};

GifController.baseUrl = 'https://api.giphy.com/v1/gifs/search';

GifController.successResponse = (response) => ({
  status: 200,
  url: response.data.data[0].url,
});

GifController.getGif = async (recipeName) => {
  const response = await gifRequest(GifController.baseUrl, recipeName);

  if (response.status === 200) return GifController.successResponse(response);

  return response;
};

module.exports = GifController;
