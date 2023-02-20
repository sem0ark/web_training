const request = require('supertest');

let app;

const mockMorgan = jest.fn((req, res, next) => next());
const mockTable = jest.fn().mockResolvedValue([]);

beforeAll(() => {
  jest.mock('./', () => require('./admin'));
  jest.mock('morgan', () => () => mockMorgan);
  jest.mock('../lib/knex', () => () => ({
    select: () => ({ table: mockTable }),
  }));
  app = request(require('../app')); // get the working server to test
});

afterAll(() => {
  jest.unmock('./');
  jest.unmock('morgan');
});

describe('GET', () => {
  it('should allow access with a password', () => {
    // here we add only one call, so we can just return it,
    //   because Jest automatically waits for promises
    return app.get('/admin')
      .auth('admin', 'admin') // entering dummy authentication
      .expect(200);
  });

  it('should reject access without a password', () => {
    return app.get('/admin')
      .expect(401);
  });
});
