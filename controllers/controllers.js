'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllers = _express2.default.Router();

controllers.get(['/index.html', "/"], function (req, res) {
  res.sendFile('/static/html/index.html');
});

module.exports = controllers;