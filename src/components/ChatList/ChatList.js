import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChat, deleteChat, setActiveChat } from "../../store/chats";

const ChatList = () => {
  const dispatch = useDispatch();

  const [chatName, setChatName] = useState("");

  const { chats } = useSelector(({ chats }) => chats);

  const handleChange = (e) => setChatName(e.target.value);
  const onChatChange = (id) => dispatch(setActiveChat(id));

  const addNewChat = () => {
    const chat = {
      id: chats.length + 1,
      name: chatName,
    };
    dispatch(createChat(chat));
    setChatName("");
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id));
  };

  return (
    <>
      <div>
        {chats.map((chat) => (
          <div key={chat.id} onClick={() => onChatChange(chat.id)}>
            {chat.name}
            <span onClick={() => removeChat(chat.id)}> - </span>
          </div>
        ))}
      </div>
      <div>
        <input value={chatName} onChange={handleChange} />
        <button onClick={() => addNewChat()}>+</button>
      </div>
    </>
  );
};

export default ChatList;
