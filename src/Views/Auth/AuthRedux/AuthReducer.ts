import { Reducer } from "react"
import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_REGISTER_FAILURE, POST_REGISTER_REQUEST, POST_REGISTER_SUCCESS, RESET_ERROR, RESET_SUCCESS } from "./AuthConstants"

const INIT_STATE = {
    Login: false,
    Register: false,
    loading: false,
    Registererror: false,
    Registersuccess: false,
    LoginSuccess: false,
    LoginError: false
}
export const AuthReducer: Reducer<any, any> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case POST_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_REGISTER_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                Register: action?.payload,
                RegisterSuccess: true
            }
        }
        case POST_REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                RegisterError: action?.payload?.message,
                RegisterSuccess: false
            }
        case RESET_ERROR:
            return {
                ...state,
                RegisterError: false,
                LoginError: false
            }
        case RESET_SUCCESS:
            return {
                ...state,
                RegisterSuccess: false
            }
        case POST_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                Login: action?.payload,
                LoginSuccess: true
            }
        case POST_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loginSuccess: false,
                LoginError: action?.payload?.message
            }
        default:
            return state
    }
}