module.exports=function(io){
	
	var io=io;

	return function(socket){
	  console.log('a user connected');
	  socket.on('send',function(data){
		 io.sockets.emit('message',data);
	  });
	  
	};

};