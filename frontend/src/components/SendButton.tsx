type SendButtonProps = {
  onClick: () => void;
};

const SendButton = ({ onClick }: SendButtonProps) => {
  return (
    <div className="send-button-container">
      <button className="send-button" onClick={onClick}>
        Send
      </button>
    </div>
  );
};

export default SendButton;
