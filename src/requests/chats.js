import axios from "axios";

export const fetchChats = () => {
  return axios.get("http://localhost:3001/chats");
};
