let ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  console.log('open connection');
}

ws.onmessage = (evt) => {
  console.log(evt.data);
}

ws.onclose = () => {
  console.log('close connection');
  
}