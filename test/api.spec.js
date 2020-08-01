/* eslint-env mocha */

const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);

const requester = chai.request(app).keepOpen();

describe('API tests', () => {
  after(async () => {
    requester.close();
  });

  it('should get an error response from /recipes/ when missing "i" parameter', async () => {
    const response = await requester.get('/recipes/');

    expect(response.statusCode).to.be.equal(400);
    expect(response.body.error).to.be.equal('Missing ingredients parameters');
  });

  it('should get an error response from /recipes/ when passing more than 3 ingredients', async () => {
    const response = await requester.get('/recipes/?i=ingredient1,ingredient2,ingredient3,ingredient4');

    expect(response.statusCode).to.be.equal(400);
    expect(response.body.error).to.be.equal('Maximum of 3 ingredients allowed');
  });

  it('should return an empty array when no recipes are found', async () => {
    const response = await requester.get('/recipes/?i=notFoundIngredient');

    expect(response.statusCode).to.be.equal(200);
    expect(response.body.keywords).to.be.deep.equal(['notFoundIngredient']);
    expect(response.body.recipes).to.be.deep.equal([]);
  });

  it('should return a recipe list with gifs', async () => {
    const response = await requester.get('/recipes/?i=cheese,egg,onion');

    const { keywords, recipes } = response.body;
    expect(response.statusCode).to.be.equal(200);
    expect(keywords).to.be.deep.equal(['cheese', 'egg', 'onion']);
    expect(recipes.length).to.be.gt(1);
    expect(Object.keys(recipes[0])).to.be.deep.eq(['title', 'ingredients', 'link', 'gif']);
  });
});
