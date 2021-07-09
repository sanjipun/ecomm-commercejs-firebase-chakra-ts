import { Reducer } from "react"
import { GET_LANDING_PRODUCTS_FAILURE, GET_LANDING_PRODUCTS_REQUEST, GET_LANDING_PRODUCTS_SUCCESS } from "./LandingConstant"

const INIT_STATE = {
    LandingProducts: [],
    loading: false,
    error: false
}

export const LandingReducer: Reducer<any, any> = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case GET_LANDING_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_LANDING_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                LandingProducts: action.payload.data
            }
        }
        case GET_LANDING_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
        default:
            return state
    }
}