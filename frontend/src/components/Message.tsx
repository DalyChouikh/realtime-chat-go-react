import { useState } from "react";

type MessageProps = {
  data: string;
};

const Message = ({ data }: MessageProps) => {
  let temp: {
    type: number;
    body: string;
  } = JSON.parse(data);
  const [message, setMessage] = useState(temp);
  return <div className="message">{message.body}</div>;
};

export default Message;
