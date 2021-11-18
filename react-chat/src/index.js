import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Message = ({ messageList }) => {
  return (
    <div className="message">
      {messageList.map((message) => (
        <div>
          <p className="messageAuthor">{message.author}</p>
          <p className="messageText">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerID;

    if (messageList.length && lastMessage.author !== "Bot") {
      timerID = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            author: "Bot",
            text: `Это автоматически отправляемое ботом сообщение. Привет, ${lastMessage.author}`,
          },
        ]);
      }, 1500);
    }
    return () => clearInterval(timerID);
  }, [messageList]);

  const newMessage = () => {
    setMessageList([...messageList, { author: author, text: text }]);
    setAuthor("");
    setText("");
  };

  function Title() {
    return <div className="title">React Chat</div>;
  }

  return (
    <div className="app">
      <Title />
      <div className="container">
        <Message messageList={messageList} />
      </div>
      <div className="form">
        <input
          placeholder="Введите ваше имя"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          value={author}
        />

        <input
          placeholder="Введите сообщение"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        />
        <button onClick={newMessage}>Send</button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
