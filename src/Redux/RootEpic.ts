import { combineEpics } from "redux-observable";
import { LoginEpic, RegisterEpic } from "Views/Auth/AuthRedux/AuthEpic";
import { LandingEpic } from "Views/LandingPage/LandingEpic";

export const RootEpic = combineEpics(
    RegisterEpic, LoginEpic, LandingEpic
);
