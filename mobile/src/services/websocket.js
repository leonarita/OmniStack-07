import socketio from 'socket.io-client';

const client = socketio('http://192.168.15.12:3333');

export default client;
