import app from './App';

const supertest = require('supertest');

describe('App', () => {
  it('is working swagger ', () => supertest(app)
    .get('/api-docs/swagger/')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200));
});
