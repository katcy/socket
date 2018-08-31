const express = require('express');
const app = express();
const http = require('http').Server(app)
const socket = require('socket.io')(http);

app.use(express.static('./public/view'));

socket.on('connection',(soc)=>{
    console.log('user connected ');
    socket.emit('server',{server:'Alfred: Connected'}); // broadcast to all sockets
    soc.on('time',(time)=>{ // listen to only current socket
        console.log(time);
    });
    soc.on('gamePad',(data)=>{
        //console.log(data);
        //broadcast to all other browser windows except for the sender
        soc.broadcast.emit('toRasp',data);
    });
});

http.listen(8080,()=>{
    console.log('Server is running at port 8080');
});