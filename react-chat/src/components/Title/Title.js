import React from "react";
import { Link } from "react-router-dom";
import styles from "./Title.module.css";

export const Title = () => {
  return (
    <div className={styles.title}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/chat">Chat</Link>
    </div>
  );
};
