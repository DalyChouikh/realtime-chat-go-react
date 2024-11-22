import { useEffect, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";

function App() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  useEffect(() => {
    connect((msg: MessageEvent) => {
      console.log("New message");
      setChatHistory((chatHistory: string[]) => [...chatHistory, msg.data]);
      console.log(chatHistory);
    });
  }, []);
  const sendMessage = () => {
    console.log("sending message: Hello");
    sendMsg("Hello");
  };
  return (
    <div className="container">
      <Header />
      <ChatHistory messages={chatHistory} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
