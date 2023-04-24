import {
  SEND_MESSAGE,
  GET_MESSAGES,
  MESSAGES_LOADING,
  MESSAGES_ERROR,
} from "./types";

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const getMessages = (messages) => ({
  type: GET_MESSAGES,
  payload: messages,
});

export const messagesLoading = (loading) => ({
  type: MESSAGES_LOADING,
  payload: loading,
});

export const messagesFail = (e) => ({
  type: MESSAGES_ERROR,
  payload: e,
});
