import "./style.css";

function App() {
  const messages = [
    {
      author: "qwe",
      text: "123",
    },
    {
      author: "zxc",
      text: "321",
    },
  ];

  const Message = ({ author, text }) => {
    return (
      <div className="message">
        <p className="messageAuthor">{author}</p>
        <p className="messageText">{text}</p>
      </div>
    );
  };

  const MessageList = ({ messages }) => {
    return messages.map((message) => {
      return (
        <Message key={message.id} author={message.author} text={message.text} />
      );
    });
  };

  function Title() {
    return <header className="title">React Chat</header>;
  }

  return (
    <div className="app">
      <Title />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
