import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "./Message";
import styles from "./Message/Message.module.css";


export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState("");
  const { roomID } = useParams();

  const ref = useRef(null);
  const refScroll = useRef(null);

  useEffect(() => {
    if (refScroll.current) {
      refScroll.current.scrollTo(0, refScroll.current.scrollHeight);
    }
  }, [messageList]);

  useEffect(() => {
    const roomMessages = messageList[roomID] ?? [];
    const lastMessage = roomMessages[roomMessages.length - 1];
    let timerID = null;

    if (roomMessages.length && lastMessage.author !== "Bot") {
      timerID = setTimeout(() => {
        setMessageList({
          ...messageList,
          [roomID]: [
            ...(messageList[roomID] ?? []),
            {
              author: "Bot",
              text: `Hello, ${lastMessage.author}`,
              date: new Date(),
            },
          ],
        });
      }, 1500);
    }
    return () => clearInterval(timerID);
  }, [messageList, roomID]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const newMessage = () => {
    if (text) {
      setMessageList({
        ...messageList,
        [roomID]: [
          ...(messageList[roomID] ?? []),
          { author: "User", text: text, date: new Date() },
        ],
      });
      setText("");
    }
  };

  const handlePressInputText = ({ code }) => {
    if (code === "Enter") {
      newMessage();
    }
    ref.current?.focus();
  };

  const roomMessages = messageList[roomID] ?? [];

  return (
      <div className={styles.container}>
        <div className={styles.messagesContainer}>
          <div className={styles.messageList} ref={refScroll}>
            {roomMessages.map((message) => (
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
  );
};
