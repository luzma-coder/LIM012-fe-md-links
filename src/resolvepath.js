const path = require('path');

const isPathAbsolute = (checkPath) => path.isAbsolute(checkPath);

const Abs = (checkPath) => (
  isPathAbsolute(checkPath) ? checkPath : path.resolve(checkPath));

const isFileMD = (checkPath) => {
  let rpta = false;
  if (path.parse(checkPath).ext === '.md') {
    rpta = true;
  }
  return rpta;
};

const isDir = (checkPath) => {
  let rpta = false;
  if (path.parse(checkPath).ext === '') {
    rpta = true;
  }
  return rpta;
};

module.exports = { Abs, isFileMD, isDir };
