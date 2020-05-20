
const dt = require('./dataTest');
const search = require('../src/search.js');

describe('contentDir', () => {
  it('Es una funcion', () => {
    expect(typeof search.contentDir).toBe('function');
  });
  it('Devuelve contenido de ruta recibida', () => {
    expect(search.contentDir(dt.route)).toEqual(dt.dirResult);
  });
});

describe('Files', () => {
  it('Es una funcion', () => {
    expect(typeof search.Files).toBe('function');
  });
  it('Devuelve links de fileMD encontrados en directorios', () => {
    const arrDir = search.contentDir(dt.route);
    expect(search.Files(arrDir)).toEqual(dt.linksDirResult);
  });
  it('Devuelve [] si no encuentra links', () => {
    const arrDirNone = search.contentDir(dt.routeNone);
    expect(search.Files(arrDirNone)).toEqual([]);
  });
});

describe('Links', () => {
  it('Es una funcion', () => {
    expect(typeof search.Links).toBe('function');
  });
  it('Devuelve links de archivo MD', () => {
    expect(search.Links(dt.fileMD)).toEqual(dt.linksResult);
  });
  it('Devuelve [] si no encuentra links', () => {
    expect(search.Links(dt.fileMDNone)).toEqual([]);
  });
});
