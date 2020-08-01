const RecipesController = {};

RecipesController.invalidIngredientsError = (message, res) => res.status(400).json({ error: message });

RecipesController.getRecipes = async (req, res) => {
  const { i: ingredients } = req.query;

  if (ingredients === undefined) return RecipesController.invalidIngredientsError('Missing ingredients parameters', res);

  const ingredientsArray = ingredients.split(',');

  if (ingredientsArray.length > 3) return RecipesController.invalidIngredientsError('Maximum of 3 ingredients allowed', res);
  return res.send(200);
};

module.exports = RecipesController;
