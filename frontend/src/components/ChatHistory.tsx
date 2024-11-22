import Message from "./Message";

type ChatHistoryProps = {
  messages: string[];
};

const ChatHistory = ({ messages }: ChatHistoryProps) => {
  const chatMessages = messages.map((msg, index) => (
    <Message key={index} data={msg} />
  ));

  return (
    <div className="chat-history-container">
      <h2 className="chat-history-title">Chat History</h2>
      {chatMessages}
    </div>
  );
};

export default ChatHistory;
