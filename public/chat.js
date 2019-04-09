// MAke Connection
var socket = io.connect('http://localhost:8080')

// Elenment
var message  = document.getElementById('message');
    handle   = document.getElementById('handle');
    btn      = document.getElementById('send');
    output   = document.getElementById('output');
    feedback = document.getElementById('feedback');
// Emit Events

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value)    
})

socket.on('chat',data => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle +': </strong>' + data.message + '</p>'
})

socket.on('typing', data => {
    feedback.innerHTML = '<p><emp>' + data + ' is typing a message... </emp></p>'
})