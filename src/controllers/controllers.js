import express from 'express';
var controllers = express.Router();


controllers.get(['/index.html',"/"], function(req, res){
  res.sendFile('/static/html/index.html');
})

module.exports = controllers
