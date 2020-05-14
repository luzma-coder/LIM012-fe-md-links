# Libreria md-links

* [1. Definición](#1-definicion)
* [2. Algoritmo](#2-algoritmo)
* [3. Documentación técnica](#3-documentación-técnica)
* [4. Guia de uso e instalación](#4-guía-de-uso-e-instalación)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)


## 1. Definición

Libreria que analiza archivos en formato `Markdown`, para verificar los links que contengan 
y reportar estadísticas.

## 2. Algoritmo

### Pseudocodigo
![searchLinks](/screen/searchLinks.png)
![main](/screen/main.png)

### Diagrama de Flujo
![diagrama](/screen/mdLinks.jpg)

### [Board](https://github.com/luzma-coder/LIM012-fe-md-links/projects/1?fullscreen=true)

## 3. Documentación técnica

mdLinks Libreria ejecutada con Node.js

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio.
- `options`: Un objeto con la propiedad:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función retorna una promesa (`Promise`) que resuelve a un arreglo de objetos, donde cada objeto representa un link y contiene las siguientes propiedades:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.

## 4. Guía de uso e instalación

### Guía de uso

#### CLI (Command Line Interface - Interfaz de Línea de Comando)

`md-links <path-to-file> [options]`

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Options

##### `--validate`

El módulo hace una petición HTTP para averiguar si el link funciona o no.

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

Output será un texto con estadísticas básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También se puede combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
### Instalación

npm install --global luzma-coder/md-links

## 5. Objetivos de aprendizaje

### Javascript
- [x] Uso de callbacks
- [ ] Consumo de Promesas
- [ ] Creacion de Promesas
- [x] Modulos de Js
- [x] Recursión

### Node
- [x] Sistema de archivos
- [x] package.json
- [x] crear modules
- [x] Instalar y usar modules
- [ ] npm scripts
- [] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [x] Testeo de tus funciones
- [ ] Testeo asíncrono
- [ ] Uso de librerias de Mock
- [ ] Mocks manuales
- [ ] Testeo para multiples Sistemas Operativos

### Git y Github
- [x] Organización en Github

### Buenas prácticas de desarrollo
- [x] Modularización
- [x] Nomenclatura / Semántica
- [x] Linting

***

