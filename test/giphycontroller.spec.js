/* eslint-env mocha */

const chai = require('chai');

const { expect } = chai;
const controller = require('../src/controllers/GifController');

describe('GIF module tests', () => {
  it('should get a gif back when providing a valid recipe name ', async () => {
    const response = await controller.getGif('hamburguer');

    expect(response.status).to.be.equal(200);
    expect(typeof response.url).to.be.equal('string');
    expect(response.url.includes('https://')).to.be.equal(true);
  });
});
