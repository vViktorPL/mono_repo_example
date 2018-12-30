const request = require('supertest');
const app = require('./server');

const locales = {
  pl: {
    key1: "wartosc1",
    key2: "wartosc2",
  },
  en: {
    key1: "value1",
    key2: "value2",
  },
};

describe('server', () => {
  it('get localizations', () => {
    return request(app({locales}))
      .get('/localizations')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual({
          ...locales
        });
      });
  });

  it('return 404 on any other routes', () => {
    return request(app({locales}))
      .get('/test')
      .expect(404);
  })
});