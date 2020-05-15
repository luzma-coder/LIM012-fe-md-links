const resolvepath = require('../src/resolvepath.js');

const route = './test/clases';
const routeResult = 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases';
const xyzResult = 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\xyz';

describe('Abs', () => {
  it('Es una funcion', () => {
    expect(typeof resolvepath.Abs).toBe('function');
  });
  it('Devuelve ruta absoluta', () => {
    expect(resolvepath.Abs(route)).toEqual(routeResult);
  });
  it('Devuelve ruta absoluta de xyz', () => {
    expect(resolvepath.Abs('xyz')).toEqual(xyzResult);
  });
});

describe('isFileMD', () => {
  it('Es una funcion', () => {
    expect(typeof resolvepath.isFileMD).toBe('function');
  });
  it('Devuelve true si es archivo MD', () => {
    expect(resolvepath.isFileMD('example.md')).toEqual(true);
  });
  it('Devuelve false si no es archivo MD', () => {
    expect(resolvepath.isFileMD('example.txt')).toEqual(false);
  });
});

describe('isDir', () => {
  it('Es una funcion', () => {
    expect(typeof resolvepath.isDir).toBe('function');
  });
  it('Devuelve true si es directorio', () => {
    expect(resolvepath.isDir(routeResult)).toEqual(true);
  });
  it('Devuelve false si no es directorio ', () => {
    expect(resolvepath.isDir('example.txt')).toEqual(false);
  });
});