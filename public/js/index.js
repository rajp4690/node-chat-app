var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        to: 'vishal',
        text: 'Hey this is Raj',
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});
                