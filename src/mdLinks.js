const resolvepath = require('./resolvepath');
const search = require('./search');
const validahref = require('./validahref.js');

const mdLinks = (route, options) => new Promise((resolve) => {
  if (!search.isValid(route)) {
    return 'ruta no existe o no es valida';
  }
  let arrLinksFound = [];
  if (resolvepath.isFileMD(route)) {
    arrLinksFound = search.Links(route);
  } else if (resolvepath.isDir(route)) {
    arrLinksFound = search.Files(search.contentDir(route));
  }
  if (arrLinksFound.length > 0) {
    if (options.validate) {
      arrLinksFound = validahref(arrLinksFound);
    }
  } else {
    return 'no se encontraron links';
  }
  return resolve(arrLinksFound);
});

module.exports = mdLinks;

// mdLinks('./test/clases/mate/negocio.md', { validate: true }).then((res) => console.log(res));
// validahref(linksResult).then((res) => console.log(res));

// console.log(mdLinks('./test/clases/cta/enero'));
// console.log(mdLinks('./test/clases'));
