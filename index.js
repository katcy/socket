const express = require('express');
const app = express();
const http = require('http').Server(app)
const socket = require('socket.io')(http);

app.use(express.static('./public/view'));

socket.on('connection',(soc)=>{
    console.log('user connected ');
    socket.emit('server',{server:'this is from server'}); // broadcast to all sockets
    soc.on('time',(time)=>{ // listen to only current socket
        console.log(time);
    });
});

http.listen(8080,()=>{
    console.log('Server is running at port 8080');
});