'use strict';

var socket = io();
$(document).ready(function () {
  socket.on('connected', function () {
    alert("Hey there");
  });

  socket.on('sendMessage', function (data) {
    alert(data.data);
  });

  $("#chat").click(function () {
    var data = $("#message").val();
    console.log(data);
    socket.emit('chat', data);
  });
});