var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    socket.emit('createEmail', {
        to: "ansumanv@gmail.com",
        text: "Hey this is anshuman"
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});


socket.on('newMessage', function (message) {
    console.log('New message recieved', message);
});