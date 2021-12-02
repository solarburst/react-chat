import { SEND_MESSAGE } from "./types";

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});
