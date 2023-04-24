import { getChats } from "./actions";
import { fetchChats } from "../../requests/chats";

export const getChatsFromDB = () => async (dispatch) => {
  fetchChats()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        dispatch(getChats(snapshot.val()));
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
