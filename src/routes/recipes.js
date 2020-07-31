const { Router } = require('express');
const RecipeController = require('../controllers/RecipesController');

const routes = Router();

routes.get('/recipes/', RecipeController.getRecipes);

module.exports = routes;
