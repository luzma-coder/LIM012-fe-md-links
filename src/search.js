const fs = require('fs');
const path = require('path');

const resolvepath = require('./resolvepath');

const contentDir = (testpath) => fs.readdirSync(testpath)
  .map((item) => `${testpath}\\${item}`);

const Links = (fileMD) => 'estamos en funcion links';


const Files = (arrDir) => {
  // const arrPart = [];
  arrDir.forEach((element) => {
    if (resolvepath.isFileMD(element)) {
      console.log(`es un archivo md ${element}`);
      // arrPart.push(Links(element));
    } else if (resolvepath.isDir(element)) {
      console.log(`es un directorio ${element}`);
      Files(contentDir(element));
    }
  });
};

const FilesMD = (arrDir) => {
  const arrFilesMd = [];
  // if fileMD
  // arrFilesMd.push(´${}\\name´);
  return arrFilesMd;
};

// console.log(contentDir(path.resolve()));
const arrx = contentDir(path.resolve());
Files(arrx);
// module.exports = {
//   contentDir,
//   Links,
//   Files,
// };
