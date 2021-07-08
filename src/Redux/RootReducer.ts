import { connectRouter } from "connected-react-router";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { AuthReducer } from "Views/Auth/AuthRedux/AuthReducer";

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    Auth: AuthReducer
  });

export default rootReducer;
