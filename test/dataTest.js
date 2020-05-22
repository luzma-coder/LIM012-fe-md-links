const path = require('path');

// para funcion contentDir
const dirResult = [
  'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\arte',
  'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\cta',
  'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\cursos.txt',
  'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\mate'];
const route = path.resolve('test/clases');
const routeNone = path.resolve('test/clases/cta');
const badRoute = 'xyz';
const fileMD = path.resolve('test/clases/example.md');
const fileMDNone = path.resolve('test/clases/cta/enero/otro.md');
const linksDirResult = [
  {
    href: 'https://gist.github.com/Danielalab/515830e8e4ec69d43b67759acd897714',
    text: 'condigurando babel',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  },
  {
    href: 'aprendegit.com',
    text: 'aprendegit.com',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  },
  {
    href: 'https://www.google.com/',
    text: 'google',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  },
  {
    href: 'http://tecnops.es/testing-en-javascript-con-jest-parte-2-de-2/',
    text: 'jest',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  },
  {
    href: 'https://www.google.com/',
    text: 'buscador',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\mate\\negocio.md',
  },
];
const linksResult = [
  {
    href: 'https://gist.github.com/Danielalab/515830e8e4ec69d43b67759acd897714',
    text: 'condigurando babel',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  },
  {
    href: 'aprendegit.com',
    text: 'aprendegit.com',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  },
  {
    href: 'https://www.google.com/',
    text: 'google',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  },
  {
    href: 'http://tecnops.es/testing-en-javascript-con-jest-parte-2-de-2/',
    text: 'jest',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
  },
];

const linksPromiseFalse = [
  {
    href: 'https://gist.github.com/Danielalab/515830e8e4ec69d43b67759acd897714',
    text: 'condigurando babel',
    fileMD: './test/clases/example.md',
  },
  {
    href: 'aprendegit.com',
    text: 'aprendegit.com',
    fileMD: './test/clases/example.md',
  },
  {
    href: 'https://www.google.com/',
    text: 'google',
    fileMD: './test/clases/example.md',
  },
  {
    href: 'http://tecnops.es/testing-en-javascript-con-jest-parte-2-de-2/',
    text: 'jest',
    fileMD: './test/clases/example.md',
  },
];

const linksValidate = [
  {
    href: 'https://gist.github.com/Danielalab/515830e8e4ec69d43b67759acd897714',
    text: 'condigurando babel',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
    status: 'ok',
    rpta: 200,
  },
  {
    href: 'aprendegit.com',
    text: 'aprendegit.com',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
    status: 'fail',
    rpta: 'no url',
  },
  {
    href: 'https://www.google.com/',
    text: 'google',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
    status: 'ok',
    rpta: 200,
  },
  {
    href: 'http://tecnops.es/testing-en-javascript-con-jest-parte-2-de-2/',
    text: 'jest',
    fileMD: 'C:\\Users\\Estudiante\\Desktop\\LIM012-fe-md-links\\test\\clases\\example.md',
    status: 'ok',
    rpta: 200,
  },
];

const linksPromiseTrue = [
  {
    href: 'https://www.google.com/',
    text: 'buscador',
    fileMD: './test/clases/mate/negocio.md',
    status: 'ok',
    rpta: 200,
  },
];

module.exports = {
  dirResult,
  route,
  routeNone,
  badRoute,
  fileMD,
  fileMDNone,
  linksDirResult,
  linksResult,
  linksPromiseFalse,
  linksPromiseTrue,
  linksValidate,
};
