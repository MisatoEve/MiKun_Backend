const socket = io();

// ▼ Chat
let user = ''
let chatBox = document.getElementById('chatBox');

// ▼ Authentication
Swal.fire({
    title: "Ingresa tu nombre para el chat:",
    input: "text",
    inputValidator: value => {
        return !value && 'Necesita un nombre'
    },
    allowOutsideClick: false
}).then(result => {
    // ►Seteo del usuario
    user = result.value
    let txtUsername = document.getElementById('username')
    txtUsername.innerHTML = user
    socket.emit('authenticated', user);
})

// ▼Evento de escribir en el campo de texto
chatBox.addEventListener('keyup', event => {
    if(event.key == 'Enter') {
        if(chatBox.value.trim().length > 0) {
            socket.emit('message', {
                user,
                message: chatBox.value
            })
            chatBox.value = ''
        }
    }
})

//▼Emisión de un mensaje
socket.on('messageLogs', data => {
    let log = document.getElementById('messageLogs')
    
    let messages = ''
    data.forEach(message => {
        messages += `<b>${message.user}</b> <i>says</i>: ${message.message}<br>`
    })

    log.innerHTML = messages
});