import { sendMessage } from "./actions";

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
