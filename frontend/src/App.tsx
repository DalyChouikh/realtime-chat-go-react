import React, { useEffect, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import SendButton from "./components/SendButton";

function App() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  useEffect(() => {
    connect((msg: MessageEvent) => {
      console.log("New message");
      setChatHistory((chatHistory: string[]) => [...chatHistory, msg.data]);
      console.log(chatHistory);
    });
  }, []);
  const sendMessageOnKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const input = event.target as HTMLInputElement;
      sendMsg(input.value);
      input.value = "";
    }
  };

  const sendMessageOnButtonClick = () => {
    const input = document.querySelector(".chat-input") as HTMLInputElement;
    sendMsg(input.value);
    input.value = "";
  };
  return (
    <div className="container">
      <Header />
      <ChatHistory messages={chatHistory} />
      <ChatInput onSendMessage={sendMessageOnKeyPress} />
      <SendButton onClick={sendMessageOnButtonClick} />
    </div>
  );
}

export default App;
