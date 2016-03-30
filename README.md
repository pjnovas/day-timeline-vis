# Day Time Vis

## Getting started

### Requirements
[Node 0.10+](http://nodejs.org/)  

[NPM 2+](http://npmjs.org/)  
if you have npm v1 update it by
```bash
npm install -g npm
```

[GruntJS](http://gruntjs.com/getting-started) is required to compile.  
If you have not installed the client yet run:  
```bash
npm install -g grunt-cli
grunt --version
```

### Install project dependencies:
```bash
npm install
```

### NPM scripts
* `npm start`: compile all and start a liverload.
* `npm run build`: compile all leaving `day-time-vis.js` and `day-time-vis.css` files into `dist/`.
* `npm run prod`: *TODO: minified and production ready compilation.*

## Project overview

### Directories
* `/grunt`: grunt tasks configuration
* `/dist`: temp directory for client compilations
* `/src`: Source files for the client application

### Tecnologies and libraries used  
* ECMAScript 2015 with [BabelJS](https://babeljs.io/)
* [React](https://facebook.github.io/react/) to render views
* CSS Styles with [SASS](http://sass-lang.com/) and [Susy](http://susy.oddbird.net/)
* All of these compiled with [GruntJS](http://gruntjs.com/)
