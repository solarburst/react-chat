import React from "react";
import Title from "../components/Title/Title.js";

const HomePage = () => {
  return (
    <div>
      <Title />
      <div>HomePage</div>
    </div>
  );
};

export default HomePage;

{
  /* <div>
      
      {chatId && (
        <>
          <div>
            {messages.map((message) => (
              <div></div>
            ))}
          </div>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSubmit}>Send</button>
        </>
      )}
    </div> */
}
