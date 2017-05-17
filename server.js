var express = require('express');
var app = express();
var http = require('http').Server(app);
var io =require('socket.io')(http);

app.use(express.static(__dirname + '/public'));




io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
    


http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
    

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  socket.broadcast.emit('hi');
});
    

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
    
