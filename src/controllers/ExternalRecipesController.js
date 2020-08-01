const { recipeRequest } = require('../services/axios');

const ExternalRecipesController = {};

ExternalRecipesController.baseUrl = 'http://www.recipepuppy.com/api/';

ExternalRecipesController.successResponse = (recipes) => ({
  status: 200,
  recipes,
});

ExternalRecipesController.getRecipes = async (ingredients) => {
  const response = await recipeRequest(ExternalRecipesController.baseUrl, ingredients);
  if (response.status === 200) return ExternalRecipesController.successResponse(response.data.results);

  return response;
};

module.exports = ExternalRecipesController;
