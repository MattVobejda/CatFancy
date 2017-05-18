var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 8000;
app.use(express.static(path.join(__dirname +'/client')));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.set('views',path.join(__dirname+'/client/templates'));
app.set('view engine','ejs');
require('./server/config/routes.js')(app);


// this selects our port and listens
// note that we're now storing our app.listen within
// a variable called server. this is important!!
var server = app.listen(port, function() {
 console.log("listening on port 8000");
});
// this is a new line we're adding AFTER our server listener
// take special note how we're passing the server
// variable. unless we have the server variable, this line will not work!!
var io = require('socket.io').listen(server);
//console.log(io);

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id);
	socket.on("button_clicked", function (data){
	    console.log('Someone clicked a button!  Reason: ' + data.message);
	    socket.broadcast.emit('server_response', {response: data.message, user: data.user});
	})
})

// app.listen(port,function(){
// 	console.log("My server is up and running...");
// })