import React, { useState } from "react";
import styles from "./ChatList.module.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

export const ChatList = () => {
  const [chats] = useState([
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
    { id: 3, name: "Chat 3" },
    { id: 4, name: "Chat 4" },
  ]);

  return (
    <List
      className={styles.chatList}
      component="nav"
      aria-label="main mailbox folders"
    >
      {chats.map((chat) => (
        <ListItemButton className={styles.chatListItem} key={chat.id}>
          {chat.name}
        </ListItemButton>
      ))}
    </List>
  );
};
