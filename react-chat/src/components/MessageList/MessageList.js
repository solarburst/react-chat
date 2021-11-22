import React, { useEffect, useRef, useState } from "react";
import { Message } from "./Message";
import { Title } from "./Title";
import styles from "./Message/Message.module.css";
import { ChatList } from "./ChatList";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerID = null;

    if (messageList.length && lastMessage.author !== "Bot") {
      timerID = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            date: new Date(),
            author: "Bot",
            text: `Это автоматически отправляемое ботом сообщение. Привет, ${lastMessage.author}`,
          },
        ]);
      }, 1500);
    }
    return () => clearInterval(timerID);
  }, [messageList]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const newMessage = () => {
    setMessageList([
      ...messageList,
      { author: "User", text: text, date: new Date() },
    ]);
    setText("");
  };

  const handlePressInputText = ({ code }) => {
    if (code === "Enter") {
      newMessage();
    }
    ref.current?.focus();
  };

  return (
    <div className="app">
      <Title />
      <div className={styles.container}>
        <ChatList />
        <div className={styles.messagesContainer}>
          <div className={styles.messageList}>
            {messageList.map((message) => (
              <Message message={message} key={message.date} />
            ))}
          </div>
          <div className="form">
            <input
              ref={ref}
              placeholder="Введите сообщение"
              onKeyPress={handlePressInputText}
              onChange={(event) => {
                setText(event.target.value);
              }}
              value={text}
            />
            <button onClick={newMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
