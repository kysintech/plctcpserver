require('net').createServer(function(socket){

	console.log('connection established!   from IP: '+socket.remoteAddress+' Port: '+socket.remotePort);
	socket.on('data',function(data){
          console.log(data+socket.remoteAddress+' '+socket.remotePort);
          	
	});
	
	socket.on('end',function(data){
		console.log('connection closed!');

	});
	socket.on('error',function(data){
		console.log('some error occurs');
	});




}).listen(16666);
