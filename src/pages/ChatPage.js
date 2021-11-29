import React, { useState, useEffect } from "react";
import Message from "../components/Message/Message.js";
import ChatList from "../components/ChatList/ChatList.js";
import Title from "../components/Title/Title.js";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [text, setText] = useState("");
  const [chatId, setChatId] = useState();

  const handleSubmit = (author, text) => {
    const obj = {
      chatId: chatId,
      text: text,
      author: author,
      date: new Date(),
    };
    setMessages((prevState) => [...prevState, obj]);
    setText("");
  };

  useEffect(() => {
    const chatMessages = messages.filter(
      (message) => message.chatId === chatId
    );
    setFilteredMessages(chatMessages);
    console.log("chat msg", chatMessages);
  }, [chatId, messages]);

  useEffect(() => {
    const lastMessage = filteredMessages[filteredMessages.length - 1];
    let timerID = null;

    if (filteredMessages.length && lastMessage.author !== "Bot") {
      timerID = setTimeout(() => {
        handleSubmit("Bot", "Я бот");
      }, 1500);
    }

    return () => clearInterval(timerID);
  }, [filteredMessages, handleSubmit, chatId]);

  console.log("filtered", filteredMessages);

  return (
    <div>
      <Title />
      <ChatList setChatId={setChatId} />
      {chatId && (
        <>
          <div>
            {filteredMessages.map((message) => (
              <Message
                author={message.author}
                text={message.text}
                key={message.date}
              />
            ))}
          </div>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => handleSubmit("User", text)}>Send</button>
        </>
      )}
    </div>
  );
};

export default ChatPage;
