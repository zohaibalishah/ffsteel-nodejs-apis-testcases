const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('Test apis', function () {
  it('testing get apis return  hello word', function () {
    chai
      .request(app)
      .get('/')
      .end((error, result) => {
        if (error) {
          console.log('error', error);
        }
        expect(result).to.have.status(200);
      });
  });

  it('testing users get apis', function () {
    chai
      .request(app)
      .get('/users')
      .end((error, result) => {
        if (error) {
          console.log('error', error);
        }
        expect(result).to.have.status(200);
      });
  });

  it('testing users post apis', function () {
    chai
      .request(app)
      .post('/users')
      .send({
        name:'zohaib',
        email: 'zohaib@gmail.com',
        password: '123',
      })
      .end((error, result) => {
        if (error) {
          console.log('error', error);
        }
        expect(result).to.have.status(200);
      });
  });
});
