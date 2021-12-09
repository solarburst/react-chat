import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile";
import { chatReducer } from "./chats";
import { messagesReducer } from "./messages";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["messages"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
  messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
