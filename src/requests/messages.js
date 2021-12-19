import { getDatabase, ref, set, child, get } from "firebase/database";

export const postMessages = (messages) => {
  const db = getDatabase();
  return set(ref(db, "messages/"), messages);
};

export const fetchMessages = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `messages/`));
};
