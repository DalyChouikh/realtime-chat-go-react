type ChatInputProps = {
  onSendMessage: (event: React.KeyboardEvent) => void;
};

const ChatInput = (props: ChatInputProps) => {
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        onKeyDown={props.onSendMessage}
        placeholder="Type a message..."
      />
    </div>
  );
};

export default ChatInput;
