const Koa = require('koa');

const app = new Koa();

const SocketServer = require('ws').Server;
const PORT = 3000;
const server = app.listen(PORT)
const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('connected');
  
  setInterval(() => {
    console.log('send msg');
    ws.send(+new Date())  
  }, 1000);

  ws.on('message', (message) => {
    console.log('received: %s', message);
    // 获取所有连接中的客户端
    const clients = wss.clients;
    // 给所有的客户端发送消息
    clients.forEach(client => {
      client.send(message)
    })
  });

  ws.on('close', () => {
    console.log('disconnected ');
    
  })
})
console.log(`server started at ${PORT}`);