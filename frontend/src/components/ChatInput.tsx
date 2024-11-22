type ChatInputProps = {
  onSendMessage: (event: React.KeyboardEvent) => void;
};

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        onKeyDown={onSendMessage}
        placeholder="Type a message..."
      />
    </div>
  );
};

export default ChatInput;
