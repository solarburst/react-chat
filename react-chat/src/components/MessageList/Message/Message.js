import styles from "./Message.module.css";

export const Message = ({ message }) => {
  return (
    <>
      <div
        className={
          message.author === "User" ? styles.messageUser : styles.messageBot
        }
      >
        <div>
          <p className={styles.messageAuthor}>{message.author}</p>
          <p className={styles.messageText}>{message.text}</p>
        </div>
      </div>
      <hr />
    </>
  );
};
