const resolvepath = require('./resolvepath');
const search = require('./search');
const validahref = require('./validahref.js');

const mdLinks = (route, options) => new Promise((resolve) => {
  if (!search.isValid(route)) {
    return resolve('no valida');
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
  }
  return resolve(arrLinksFound);
});

module.exports = mdLinks;
