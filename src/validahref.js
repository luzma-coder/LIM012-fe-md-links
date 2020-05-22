const fetch = require('node-fetch');

const validahref = (arrLinksFound) => {
  const arrPromises = arrLinksFound.map((element) => new Promise((resolve) => fetch(element.href)
    .then((res) => {
      element.status = (res.statusText === 'OK' ? 'ok' : 'fail'); // ok o fail
      element.rpta = res.status; // 200 400 404
      resolve(element);
    })
    .catch(() => {
      element.status = 'fail';
      element.rpta = 'no url'; // 200 400 404
      resolve(element);
    })));
  return Promise.all(arrPromises);
};

module.exports = validahref;
// validahref(linksResult).then((res) => console.log(res));
