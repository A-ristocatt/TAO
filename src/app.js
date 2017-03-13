import express from 'express'
import path from 'path'

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//import from projects dirs
import controllers from './controllers/controllers';

//app.use('/', controller);
app.use(express.static('public'))
app.get(['/', '/index.html'], function(req, res){
  res.sendFile(path.join(__dirname,'./public/html/index.html'));
})

io.on('connection', function(socket){
  console.log(socket);
})

http.listen(3000, function(){
  console.log("Listening on *:3000")
})
