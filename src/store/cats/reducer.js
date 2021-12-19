import { CATS_LOADING, CATS_ERROR, CATS_REQUEST } from "./types";

const initialState = {
  cats: undefined,
  loading: false,
  error: null,
};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATS_REQUEST:
      return {
        ...state,
        cats: action.payload,
      };
    case CATS_LOADING:
      return { ...state, loading: action.payload };
    case CATS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
