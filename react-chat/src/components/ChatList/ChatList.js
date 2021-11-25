import { Link, useParams } from "react-router-dom";
import styles from "./ChatList.module.css";
import { useState } from "react";
import { Chat } from "./Chat";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

export const ChatList = () => {
  const { roomId } = useParams();
  const [chats] = useState(["room1", "room2", "room3"]);

  return (
    <List
      className={styles.chatList}
      component="nav"
      aria-label="main mailbox folders"
    >
      {chats.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === roomId} />
        </Link>
      ))}
    </List>
  );
};
