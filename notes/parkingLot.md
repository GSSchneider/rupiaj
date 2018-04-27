// .babelrc

{
  "presets": ["react", "env", "stage-2"],
  "plugins": [
    "add-module-exports",
    "transform-es2015-modules-commonjs"
  ]
}

// package.json

"scripts": {
    "start": "node server",
    "start-dev": "webpack -w & nodemon server/index.js",
    "test": "mocha --colors --watch 'src/*.spec.js' "
  },
  "devDependencies": {
    "babel-core": "^6.26.2",
    "babel-loader": "^7.1.4",
    "babel-plugin-add-module-exports": "^0.2.1",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.2",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-register": "^6.26.0",
    "chai": "^4.1.2",
    "mocha": "^5.1.1",
    "volleyball": "^1.4.1",
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14"
  },
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.3",
    "immutable": "^3.8.2",
    "path": "^0.12.7",
    "react": "^16.3.1",
    "react-dom": "^16.3.1",
    "react-router-dom": "^4.2.2",
    "redux": "^4.0.0",
    "socket.io": "^2.1.0"
  }
