
const search = require('../src/search.js');
const path = require('path');

const arrResult = ['.git', 'coverage', 'node_modules', 'screen', 'src', 'test'];
const route = path.resolve();
const badRoute = "xyz";

describe('ConentDir', () => {
  it('Es una funcion', () => {
    expect(typeof search.contentDir).toBe('function');
  });
  it('Devuelve contenido de ruta recibida', () => {
    expect(search.contentDir(route)).toEqual(arrResult);
  });
  it('Devuelve mensaje:Ruta no encontrada, de ruta errada', () => {
    expect(search.contentDir(badRoute)).toEqual('Ruta no encontrada');
  });
});

describe('Files', () => {
  it('Es una funcion', () => {
    expect(typeof search.Files).toBe('function');
  });
  it('Devuelve contenido de ruta recibida', () => {
    expect(search.contentDir(route)).toEqual(arrResult);
  });
  it('Devuelve mensaje:Ruta no encontrada, de ruta errada', () => {
    expect(search.contentDir(badRoute)).toEqual('Ruta no encontrada');
  });
});

describe('Links', () => {
  it('Es una funcion', () => {
    expect(typeof search.Links).toBe('function');
  });
});
