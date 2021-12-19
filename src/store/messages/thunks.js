import { postMessages } from "../../requests/messages";
import { fetchMessages } from "../../requests/messages";
import {
  sendMessage,
  getMessages,
  messagesLoading,
  messagesFail,
} from "./actions";

export const getMessagesFromDB = () => async (dispatch) => {
  fetchMessages()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        dispatch(getMessages(snapshot.val()));
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const postMessagesToDB = (messages) => async (dispatch) => {
  console.log("ьесседжес)", messages);
  try {
    dispatch(messagesLoading(true));
    postMessages(messages);
  } catch (e) {
    dispatch(messagesFail(e));
  } finally {
    dispatch(messagesLoading(false));
  }
};

export const botSendMessage = (chatId, text) => (dispatch) => {
  const message = {
    chatId: chatId,
    text: text,
    author: "Bot",
    date: new Date(),
  };

  setTimeout(() => {
    return dispatch(sendMessage(message));
  }, 1500);
};
