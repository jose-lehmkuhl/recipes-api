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

  it('should get an error response from /recipes/', async () => {
    expect(true).to.be.eq(true);
    const response = await requester.get('/recipes/');

    expect(response.statusCode).to.be.equal(400);
    expect(response.body.error).to.be.equal('Please provide valid ingredients as query parameters');
  });
});
