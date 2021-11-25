import { Routes, Route } from "react-router-dom";
import { Layout, ChatList, App } from "../components";

export const ChatPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            chats={<ChatList />}
            messages={<h1>Choose Chat ...</h1>}
          />
        }
      />
      <Route
        path="/:roomId"
        element={<Layout chats={<ChatList />} messages={<App />} />}
      />
    </Routes>
  );
};