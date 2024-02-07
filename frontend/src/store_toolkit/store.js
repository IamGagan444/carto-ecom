import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";
import translations from "../translations";
import usersReducer from "./userSlice";
import { i18nReducer } from "react-redux-i18n";

const persistConfig = {
  key: "users",
  storage: storage,
  whitelist: ["users"], // which reducer want to store
};



const rootReducer = {
  i18n: i18nReducer,
  users: usersReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const ReduxStore = () => {
  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translations));
  store.dispatch(setLocale("en"));
  return store;
};

const persistor = persistStore(store);
export { persistor, ReduxStore };
