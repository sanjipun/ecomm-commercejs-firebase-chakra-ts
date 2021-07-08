import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { createEpicMiddleware } from "redux-observable";
import { compose, createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import rootReducers from "./RootReducer";
import { RootEpic } from "./RootEpic";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware({
  dependencies: {
    getFirebase, getFirestore
  }
});
const middleware = [epicMiddleware];

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["Auth"],
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const persistedReducer = (history: any) =>
  persistReducer(persistConfig, rootReducers(history));

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : compose;

const initialState: any = {};
const store = createStore(
  persistedReducer(history),
  initialState,
  compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV === "development" ? reduxDevTools : compose
  )
);
const persistor = persistStore(store);
epicMiddleware.run(RootEpic);
export { store, persistor };
