const { gifRequest } = require('../services/axios');

const GifController = {};

GifController.baseUrl = 'https://api.giphy.com/v1/gifs/search';

GifController.apiStatus = async () => {
  const response = await gifRequest(GifController.baseUrl, 'test');
  if (response.status === 200) return true;
  return false;
};
GifController.successResponse = (url) => ({
  status: 200,
  url,
});

GifController.getGif = async (recipeName) => {
  const response = await gifRequest(GifController.baseUrl, recipeName);

  if (response.status === 200) {
    const { data } = response.data;
    if (data.length > 0) return GifController.successResponse(data[0].url);
    return GifController.successResponse('NO GIFS FOUND FOR THIS RECIPE TITLE');
  }

  return response;
};

module.exports = GifController;
