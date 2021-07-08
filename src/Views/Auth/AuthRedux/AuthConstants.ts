export const POST_REGISTER_REQUEST = "POST_REGISTER_REQUEST"
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS"
export const POST_REGISTER_FAILURE = "POST_REGISTER_FAILURE"

export const POST_LOGIN_REQUEST = "POST_LOGIN_REQUEST"
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS"
export const POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE"

export const RESET_ERROR = "RESET_ERROR"
export const RESET_SUCCESS = "RESET_SUCCESS"


export interface RegisterForm {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    newsletter?: boolean
}
export interface LoginForm {
    email: string,
    password: string,
    rememberMe?: boolean
}