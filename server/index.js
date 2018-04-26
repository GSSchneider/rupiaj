const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const db = require('./_db.js');
const PORT = process.env.PORT || 8080;
const app = express();
const server = app.listen(PORT, () => console.log(`Server listening on  port ${PORT}`));
const io = require('socket.io')(server);

module.exports = app;

// handle sockets
require('./socket')(io);

// syncing db
db.sync().then(() => console.log('Database is synced'));

// logging middleware
app.use(volleyball);

// static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'public')));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 'API' routes
app.use('/api', require('./api'));

// 404 middleware
app.use((req, res, next) =>
  path.extname(req.path).length > 0 ?
    res.status(404).send('Not found') :
    next()
);

// send index.html
app.use('*', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

// error handling endware
app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.')
);
