const resolvepath = require('./resolvepath');
const search = require('./search');
const valida = require('./valida');

const mdLinks = (route, options) => {
    let arrLinksFound= [];
    if (IsValid(route)){
        const u_path = resolvepath.Abs(route);
        if (resolvepath.isFileMD(u_path)) {
            arrLinksFound.push(search.Links(u_path));
        } elseif (resolvepath.isDir(u_path)) {
            arrLinksFound = arrLinksFound.push(search.Files(contentDir(u_path)));
        }
        if (arrLinksFound.length){
            if (options.validate){
                return valida.allLinks(arrLinksFound);
            } else {
                return arrLinksFound;
            }
        } else {
            return 'Links no encontrados';
        }
    } else {
        return 'Path invalido o no existe';
    }
};

module.exports = { mdLinks };