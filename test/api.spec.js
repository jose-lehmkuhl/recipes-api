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
});
