import "./App.css";

function App() {
  const Message = ({ message }) => {
    return <h3 className="App-message">{message}</h3>;
  };

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className="App">
      <header className="App-header">
        <Message message={text} />
      </header>
    </div>
  );
}

export default App;
