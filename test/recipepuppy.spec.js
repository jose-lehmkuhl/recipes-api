/* eslint-env mocha */

const chai = require('chai');

const { expect } = chai;
const controller = require('../src/controllers/ExternalRecipesController');

describe('Recipes module tests', () => {
  it('should get a recipe lists when valid ingredients are provided', async () => {
    const response = await controller.getRecipes('onions,garlic,eggs');

    expect(response.status).to.be.equal(200);
    expect(response.recipes.length).to.be.greaterThan(0);
  });
});
