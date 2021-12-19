import { CATS_REQUEST, CATS_LOADING, CATS_ERROR } from "./types";

export const catsRequest = (cats) => ({
  type: CATS_REQUEST,
  payload: cats,
});

export const catsLoading = (loading) => ({
  type: CATS_LOADING,
  payload: loading,
});

export const catsFail = (e) => ({
  type: CATS_ERROR,
  payload: e,
});
