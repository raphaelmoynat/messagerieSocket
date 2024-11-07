const socket = io('ws://localhost:8080')

socket.on('message', (message) => {
    const line = document.createElement('li')
    line.innerHTML = message
    document.querySelector('ul').appendChild(line)

})

document.querySelector('button').addEventListener('click', (e) => {
    const messageToSend = document.querySelector('input').value
    socket.emit('message', messageToSend)
})