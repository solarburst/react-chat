import { CREATE_CHAT, DELETE_CHAT, SET_ACTIVE_CHAT, GET_CHATS } from "./types";

const initialState = {
  chats: [],
  activeChat: null,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };
    case DELETE_CHAT:
      return {
        ...state,
        chats: state.chats.filter((chat) => chat.id !== action.payload),
      };
    case SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.payload,
      };
    case GET_CHATS:
      return {
        ...state,
        chats: action.payload,
      };
    default:
      return state;
  }
};
