
var options = {
  //banner: "<%= banner %>",
  browserifyOptions: {
    debug: true
  },
  debug: true,
  extension: [ ".js", ".jsx" ],
  transform: [
    [ "babelify", {
      presets: ["react", "es2015", "stage-0"],
      plugins: ["add-module-exports", "transform-runtime"]
    }],
    [ require("grunt-react").browserify, { global: true } ]
  ]
};

module.exports = {
  app: {
    options: options,
    src: ["src/index.js"],
    dest: "dist/<%= pkg.name %>.js"
  },

  watch: {
    options: Object.assign({}, options, { watch: true }),
    src: ["src/index.js"],
    dest: "dist/<%= pkg.name %>.js"
  }

};
