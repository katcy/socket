const express = require('express');
const app = express();
const http = require('http').Server(app)
const socket = require('socket.io')(http);

socket.on('connection',(soc)=>{
    console.log('BATMOBILE Online ');
    soc.emit('bat',{bat:'BATMOBILE Online'}); // broadcast to particular socket
    soc.on('time',(time)=>{ // listen to only current socket
        console.log(time);
    });
});

http.listen(8181,()=>{
    console.log('Server is running at port 8181');
});