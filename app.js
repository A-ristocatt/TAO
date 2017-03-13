'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _controllers = require('./controllers/controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//import from projects dirs


//app.use('/', controller);
app.use(_express2.default.static('public'));
app.get(['/', '/index.html'], function (req, res) {
  res.sendFile(_path2.default.join(__dirname, './public/html/index.html'));
});

io.on('connection', function (socket) {
  console.log(socket);
});

http.listen(3000, function () {
  console.log("Listening on *:3000");
});
