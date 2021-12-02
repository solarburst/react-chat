import { CREATE_CHAT, DELETE_CHAT, SET_ACTIVE_CHAT } from "./types";

const initialState = {
  chats: [
    { id: 1, name: "chat 1" },
    { id: 2, name: "chat 2" },
    { id: 3, name: "chat 3" },
  ],
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
    default:
      return state;
  }
};
