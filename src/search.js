const fs = require('fs');
const marked = require('marked');
const resolvepath = require('./resolvepath');

// Devuelve contenido del directorio
const contentDir = (testpath) => fs.readdirSync(testpath)
  .map((item) => `${testpath}\\${item}`);

// Recorre archivo MD y devuelve links encontrados
const Links = (fileMD) => {
  const arrLinks = [];
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => arrLinks.push({ href, text, fileMD });
  marked(fs.readFileSync(fileMD, 'utf8'), { renderer });
  return arrLinks;
};

// Recorre los distintos directorios buscando archivos MD
const Files = (arrDir) => {
  let arrPart = [];
  // let arrTemp = [];
  arrDir.forEach((element) => {
    if (resolvepath.isFileMD(element)) {
      arrPart = arrPart.concat(Links(element));
    } else if (resolvepath.isDir(element)) {
      arrPart = arrPart.concat(Files(contentDir(element)));
    }
  });
  return arrPart;
};

module.exports = {
  contentDir,
  Links,
  Files,
};
