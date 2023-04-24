import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ChatPage, ProfilePage, Cats, AuthPage } from "./pages";

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [chatId, setChatId] = useState();

  const handleSubmit = () => {
    const obj = {
      chatId: chatId,
      message: text,
      author: "User",
      date: new Date(),
    };
    setMessages((prevState) => [...prevState, obj]);
    setText("");
  };

  useEffect(() => {
    const chatMessages = messages.filter(
      (message) => message.chatId === chatId
    );
  }, [chatId, messages]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cats" element={<Cats />} />
      <Route path="/*" element={<h1>404</h1>} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
