var importOnce = require("node-sass-import-once");

module.exports = {
  app: {
    options: {
      style: "expanded",
      require: "susy",
      importer: importOnce,
      importOnce: {
        index: false,
        css: true,
        bower: false
      }
    },
    files: {
      "dist/<%= pkg.name %>.css": "src/index.scss"
    }
  }
};
