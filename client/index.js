let ws = new WebSocket('ws://www.miaokefu.cn');

ws.onopen = () => {
  console.log('open connection');
}

ws.onmessage = (evt) => {
  console.log(evt.data);
  const p = document.createElement('p');
  p.innerHTML = evt.data;
  document.body.appendChild(p)
}

ws.onclose = () => {
  console.log('close connection');
  
}

