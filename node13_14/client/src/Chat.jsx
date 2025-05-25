import { useEffect, useRef, useState } from "react";
import "./index.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [onlineUsers, setOnlineUsers] = useState(1);
  const ws = useRef(null);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:3001");

    ws.current.onopen = () => {
      console.log("Connected to server");
    };

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "init") {
          setMessages(data.messages);
          setOnlineUsers(data.online);
        }

        if (data.type === "add") {
          setMessages((prev) => [...prev, data.message]);
        }

        if (data.type === "edit") {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === data.id ? { ...msg, text: data.text } : msg
            )
          );
        }

        if (data.type === "online") {
          setOnlineUsers(data.count);
        }
      } catch (e) {
        console.error("Invalid message:", e);
      }
    };

    ws.current.onclose = () => {
      console.log("Disconnected from server");
    };

    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (ws.current && input.trim() !== "") {
      const message = {
        type: "new",
        text: input.trim(),
      };
      ws.current.send(JSON.stringify(message));
      setInput("");
    }
  };

  const editMessage = (id) => {
    const newText = prompt("Edit your message:");
    if (newText && newText.trim() !== "") {
      ws.current.send(
        JSON.stringify({
          type: "edit",
          id,
          text: newText.trim(),
        })
      );
    }
  };

  return (
    <div className="chat-wrapper">
      <h2>🟢 Online users: {onlineUsers}</h2>
      <div className="chat-container" ref={messageContainerRef}>
        {messages.length === 0 ? (
          <div className="empty">No messages yet</div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="message">
              <div className="avatar">
                <img src="https://i.pravatar.cc/100" alt="avatar" />
              </div>
              <div className="text-content">
                <div className="text">{msg.text}</div>
                <div className="date">
                  {new Date(msg.date).toLocaleString()}
                  <button onClick={() => editMessage(msg.id)}>✏️</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
