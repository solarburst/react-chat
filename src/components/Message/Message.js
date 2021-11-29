import React from "react";
import styles from "./Message.module.css";

const Message = ({ author, text }) => {
  return (
    <>
      <div
        className={author === "User" ? styles.messageUser : styles.messageBot}
      >
        <div>
          <p className={styles.messageAuthor}>{author}</p>
          <p className={styles.messageText}>{text}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Message;
