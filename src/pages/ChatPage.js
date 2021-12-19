import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../store/messages";
import { botSendMessage } from "../store/messages";
import { getChatsFromDB } from "../store/chats/thunks";
import { postMessagesToDB, getMessagesFromDB } from "../store/messages/thunks";
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

  const handleSubmit = () => {
    const message = {
      chatId: activeChat,
      text: text,
      author: "User",
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

    if (filteredMessages.length && lastMessage.author !== "Bot") {
      dispatch(botSendMessage(activeChat, "Я бот"));
    }
  }, [filteredMessages, activeChat, dispatch]);

  useEffect(() => {
    dispatch(getChatsFromDB());
  }, [dispatch]);

  useEffect(() => {
    dispatch(postMessagesToDB(messages));
  }, [dispatch, messages]);

  useEffect(() => {
    dispatch(getMessagesFromDB());
  }, []);

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
          <button onClick={() => handleSubmit()}>Send</button>
        </>
      )}
    </div>
  );
};

export default ChatPage;
