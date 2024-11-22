let socket: WebSocket = new WebSocket("ws://localhost:8080/ws");

let connect = (cb: Function) => {
  socket.onmessage = (msg: MessageEvent) => {
    cb(msg);
  };
};

let sendMsg = (msg: string) => {
  socket.send(msg);
};

export { connect, sendMsg };
