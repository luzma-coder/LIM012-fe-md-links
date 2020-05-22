const dt = require('./dataTest');
const validahref = require('../src/validahref.js');

describe('validahref', () => {
  it('Es una funcion', () => {
    expect(typeof validahref).toBe('function');
  });

  it('Devuelve promesa, al validar href', (done) => {
    validahref(dt.linksResult).then((data) => {
      expect(data).toHaveLength(4);
      expect(data[0].text).toEqual('condigurando babel');
      expect(data).toEqual(dt.linksValidate);
      done();
    });
  });
});
