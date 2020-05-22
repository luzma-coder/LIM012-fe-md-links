const dt = require('./dataTest');
const mdLinks = require('../src/mdLinks.js');

describe('mdLinks', () => {
  it('Es una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('Devuelve promesa, validate: false', (done) => {
    const routeOfUser = './test/clases/example.md';
    mdLinks(routeOfUser, { validate: false }).then((data) => {
      // expect(data.length).toEqual(4);
      expect(data).toHaveLength(4);
      expect(data[0].text).toEqual('condigurando babel');
      expect(data).toEqual(dt.linksPromiseFalse);
      done();
    });
  });

  it('Devuelve promesa, validate: true', (done) => {
    const routeOfUser = './test/clases/mate/negocio.md';
    mdLinks(routeOfUser, { validate: true }).then((data) => {
      expect(data).toHaveLength(1);
      expect(data[0].text).toEqual('buscador');
      expect(data).toEqual(dt.linksPromiseTrue);
      done();
    });
  });
});
