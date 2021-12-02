import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../store/messages";
import Message from "../components/Message/Message.js";
import ChatList from "../components/ChatList/ChatList.js";
import Title from "../components/Title/Title.js";

const ChatPage = () => {
  const dispatch = useDispatch();

  const [filteredMessages, setFilteredMessages] = useState([]);
  const [text, setText] = useState("");

  const { messages } = useSelector(({ messages }) => {
    console.log("msg", messages);
    return messages;
  });
  const { activeChat } = useSelector(({ chats }) => chats);

  const handleSubmit = (author, text) => {
    const message = {
      chatId: activeChat,
      text: text,
      author: author,
      date: new Date(),
    };
    dispatch(sendMessage(message));
    setText("");
  };

  useEffect(() => {
    const chatMessages = messages.filter(
      (message) => message.chatId === activeChat
    );
    setFilteredMessages(chatMessages);
  }, [activeChat, messages]);

  useEffect(() => {
    const lastMessage = filteredMessages[filteredMessages.length - 1];
    let timerID = null;

    if (filteredMessages.length && lastMessage.author !== "Bot") {
      timerID = setTimeout(() => {
        handleSubmit("Bot", "Я бот");
      }, 1500);
    }

    return () => clearInterval(timerID);
  }, [filteredMessages, handleSubmit, activeChat]);

  return (
    <div>
      <Title />
      <ChatList />
      {activeChat && (
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
