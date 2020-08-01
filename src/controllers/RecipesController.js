const { getGif } = require('./GifController');
const { getRecipes } = require('./ExternalRecipesController');

const RecipesController = {};

RecipesController.recipesError = (message, res) => res.status(400).json({ error: message });

RecipesController.responseObject = (keywords, recipes) => ({
  keywords,
  recipes,
});

RecipesController.externalError = (externalResponse, res) => res.status(externalResponse.status).json({
  error: 'Error received from external API',
  response: externalResponse,
});

RecipesController.externalRecipeHandler = async (ingredients, res) => {
  const recipesResponse = await getRecipes(ingredients);
  if (recipesResponse.status !== 200) return RecipesController.externalError(recipesResponse, res);
  const { recipes } = recipesResponse;
  if (recipes.length === 0) return res.status(200).json(RecipesController.responseObject(ingredients.split(','), recipes));
};

RecipesController.getRecipes = async (req, res) => {
  const { i: ingredients } = req.query;

  if (ingredients === undefined) return RecipesController.recipesError('Missing ingredients parameters', res);
  const ingredientsArray = ingredients.split(',');
  if (ingredientsArray.length > 3) return RecipesController.recipesError('Maximum of 3 ingredients allowed', res);

  return RecipesController.externalRecipeHandler(ingredients, res);
};

module.exports = RecipesController;
