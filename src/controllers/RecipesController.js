const RecipesController = {};

RecipesController.invalidIngredientsError = (res) => res.status(400).json({ error: 'Please provide valid ingredients as query parameters' });

RecipesController.getRecipes = async (req, res) => {
  const { i: ingredients } = req.query;

  if (ingredients === undefined) return RecipesController.invalidIngredientsError(res);

  return res.send(200);
};

module.exports = RecipesController;
