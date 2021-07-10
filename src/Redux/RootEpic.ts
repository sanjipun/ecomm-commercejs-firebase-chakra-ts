import { combineEpics } from "redux-observable";
import { LoginEpic, RegisterEpic } from "Views/Auth/AuthRedux/AuthEpic";
import { LandingEpic } from "Views/LandingPage/LandingEpic";
import { ProductTopEpic } from "Views/Products/ProductTop/ProductTopEpic";

export const RootEpic = combineEpics(
    RegisterEpic, LoginEpic, LandingEpic, ProductTopEpic
);
