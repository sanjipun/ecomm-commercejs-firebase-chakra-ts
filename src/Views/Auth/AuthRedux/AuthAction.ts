import { POST_REGISTER_REQUEST } from "Redux/Constants";
import { LoginForm, POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_REGISTER_FAILURE, POST_REGISTER_SUCCESS, RegisterForm, RESET_ERROR, RESET_SUCCESS } from "./AuthConstants";

export const PostRegisterRequest = (data: RegisterForm) => ({ type: POST_REGISTER_REQUEST, payload: data })
export const PostRegisterSuccess = (data: RegisterForm) => ({ type: POST_REGISTER_SUCCESS, payload: data })
export const PostRegisterFailure = (data: RegisterForm) => ({ type: POST_REGISTER_FAILURE, payload: data })

export const ResetError = () => ({ type: RESET_ERROR })
export const ResetSuccess = () => ({ type: RESET_SUCCESS })

export const PostLoginRequest = (data: LoginForm) => ({ type: POST_LOGIN_REQUEST, payload: data })
export const PostLoginSuccess = (data: LoginForm) => ({ type: POST_LOGIN_SUCCESS, payload: data })
export const PostLoginFailure = (data: LoginForm) => ({ type: POST_LOGIN_FAILURE, payload: data })