import React from "react";

const ChatList = ({ setChatId }) => {
  const chats = [
    { id: 1, name: "chat 1" },
    { id: 2, name: "chat 2" },
    { id: 3, name: "chat 3" },
  ];

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id} onClick={() => setChatId(chat.id)}>
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
