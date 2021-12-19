import { getDatabase, ref, child, get } from "firebase/database";

export const fetchChats = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `chats/`));
};
