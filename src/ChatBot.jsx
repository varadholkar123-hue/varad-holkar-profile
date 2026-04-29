import React, { useState } from "react";

const ChatBot = ({ close }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 मी तुझा AI Assistant आहे!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };

    let botReply = "मला समजलं नाही 😅";

    const text = input.toLowerCase();

    if (text.includes("hello")) botReply = "Hello 😄";
    else if (text.includes("project")) botReply = "तुझे projects heavy आहेत 🔥";
    else if (text.includes("skill")) botReply = "तुझी skills strong आहेत 💪";
    else if (text.includes("who")) botReply = "मी तुझा portfolio AI bot 🤖";

    setMessages([...messages, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h3>AI Chat 🤖</h3>
        <button onClick={close}>✖</button>
      </div>

      <div className="chat-body">
        {messages.map((m, i) => (
          <div key={i} className={m.from}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;