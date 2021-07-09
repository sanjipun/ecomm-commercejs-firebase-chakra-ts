import { connectRouter } from "connected-react-router";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { AuthReducer } from "Views/Auth/AuthRedux/AuthReducer";
import { LandingReducer } from "Views/LandingPage/LandingReducer";
import { ProductTopReducer } from "Views/Products/ProductTop/ProductTopReducer";

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    Auth: AuthReducer,
    ProductTop: ProductTopReducer,
    Landing: LandingReducer
  });

export default rootReducer;
