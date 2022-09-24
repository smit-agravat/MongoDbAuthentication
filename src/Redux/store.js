import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authRedux";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PURGE,
  PERSIST,
  PAUSE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, REHYDRATE, PERSIST, PURGE,PAUSE],
      },
    }),
});

export let persistor = persistStore(store);
