import {
  SEND_MESSAGE,
  MESSAGES_LOADING,
  MESSAGES_ERROR,
  GET_MESSAGES,
} from "./types";

const initialState = {
  messages: [],
  messagesLoading: false,
  messageError: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case MESSAGES_LOADING:
      return { ...state, loading: action.payload };
    case MESSAGES_ERROR:
      return { ...state, error: action.payload };
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};
