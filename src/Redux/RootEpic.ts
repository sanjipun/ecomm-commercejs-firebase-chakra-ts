import { combineEpics } from "redux-observable";
import { LoginEpic, RegisterEpic } from "Views/Auth/AuthRedux/AuthEpic";

export const RootEpic = combineEpics(
    RegisterEpic, LoginEpic
);
