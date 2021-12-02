import { CREATE_CHAT, DELETE_CHAT, SET_ACTIVE_CHAT } from "./types";

export const createChat = (chat) => ({
  type: CREATE_CHAT,
  payload: chat,
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

export const setActiveChat = (id) => ({
  type: SET_ACTIVE_CHAT,
  payload: id,
});
