$(function (){
	var socket = io.connect();
	$('#send').click(function(e){
		e.preventDefault();
		socket.emit('send',$('#message').val());
		$('#message').val('')
	});
	
	socket.on('message',function(data){
		$('#chat').append(data+'<br/>');
	});
});