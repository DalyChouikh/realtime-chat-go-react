let socket: WebSocket = new WebSocket("ws://localhost:8080/ws");

let connect = (cb: Function) => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg: MessageEvent) => {
    console.log(msg);
    cb(msg);
  };

  socket.onclose = (event: CloseEvent) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error: Event) => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = (msg: string) => {
  console.log("Sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
