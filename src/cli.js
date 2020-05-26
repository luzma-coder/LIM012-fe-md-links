#!/usr/bin/env node
const color = require('colors');
const mdlinks = require('./mdLinks.js');

const arg = process.argv;
const route = arg[2]; // cambiar a 1 cuando funcione md-links
const arg1 = arg[3];
const arg2 = arg[4];
const options = ['--validate', '--stats'];
const help = `
====================== help =======================
md-links <path-to-file> -- validate
md-links <path-to-file> --stats
md-links <path-to-file> -- validate --stats
===================================================`;

// devuelve solo totales links, unique y broken
const printStats = (array, tooBroken) => {
  let linksPrint = '';
  if (array === 'no valida') {
    linksPrint = '<path-to-file> no valido';
  } else if (array.length > 0) {
    const totLinks = array.length;
    const totUnique = new Set(array.map((element) => element.href));
    linksPrint = `
${color.cyan('Total: ')} ${color.cyan(totLinks)} 
${color.green('Unique: ')} ${color.green(totUnique.size)} `;
    if (tooBroken) {
      const totBroken = array.filter((element) => element.status === 'fail');
      linksPrint += `
${color.red('Broken: ')} ${color.red(totBroken.length)} `;
    }
  } else linksPrint = 'no se encontraron links';
  return linksPrint;
};

// devuelve el listado de links formateado para consola
const printLinks = (array, isFiveProperties) => {
  let linksPrint = '';
  if (array === 'no valida') {
    linksPrint = '<path-to-file> no valido';
  } else if (array.length > 0) {
    array.forEach((element) => {
      linksPrint += (isFiveProperties ? `
${element.fileMD} ${color.cyan(element.href)} ${color.red(element.status)} ${color.yellow(element.rpta)} ${element.text.substring(0, 50)}` : `
${element.fileMD} ${color.cyan(element.href)} ${element.text.substring(0, 50)}`);
    });
  } else linksPrint = 'no se encontraron links';
  return linksPrint;
};

// de acuerdo a lo solicitado por el usuario se imprime en consola
if (arg.length === 2) {
  console.log(help);
} else {
  switch (arg.length) {
    case 3:
      mdlinks(route, { validate: false })
        .then((res) => console.log(printLinks(res, false)))
        .catch(console.error);
      break;
    case 4:
      if (arg1 === '--validate') {
        mdlinks(route, { validate: true })
          .then((res) => console.log(printLinks(res, true)));
      } else if (arg1 === '--stats') {
        mdlinks(route, { validate: true })
          .then((res) => console.log(printStats(res, false)));
      } else console.log(help);
      break;
    case 5:
      if (options.includes(arg2) && arg1 !== arg2) {
        mdlinks(route, { validate: true })
          .then((res) => console.log(printStats(res, true)));
      } else console.log(help);
      break;
    default:
        // do nothing
  }
}
