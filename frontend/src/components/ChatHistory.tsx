type ChatHistoryProps = {
  messages: string[];
};

const ChatHistory = (props: ChatHistoryProps) => {
  const messages = props.messages.map((msg, index) => (
    <p key={index} className="chat-history-message">
      {msg}
    </p>
  ));

  return (
    <div className="chat-history-container">
      <h2 className="chat-history-title">Chat History</h2>
      {messages}
    </div>
  );
};

export default ChatHistory;
