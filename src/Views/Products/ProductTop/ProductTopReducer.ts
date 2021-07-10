import { Reducer } from "react"
import { ADD_TO_CART, ADD_TO_FAV, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./ProductTopConstant"

const INIT_STATE = {
    CartItems: [],
    FavItems: false,
    loading: false,
    error: false,
    Product: [],
    NoOfItemsInCart: false
}

export const ProductTopReducer: Reducer<any, any> = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const nextCart = [...state.CartItems];
            const existingIndex = nextCart.findIndex((item) => item.productName === action.payload.productName);
            if (existingIndex >= 0) {
                const newQuantity = action.payload.numberOfItems;
                //parseInt(nextCart[existingIndex].numberOfItems + 
                nextCart[existingIndex] = {
                    ...action.payload,
                    numberOfItems: newQuantity,
                };
            } else {
                nextCart.push(action.payload);
            }
            return {
                ...state,
                CartItems: nextCart,
                NoOfItemsInCart: nextCart.length
            };
        }
        case ADD_TO_FAV: {
            const nextCart = [...state.CartItems];
            const existingIndex = nextCart.findIndex((item) => item.productName === action.payload.productName);
            if (existingIndex >= 0) {
                const newQuantity = action.payload.numberOfItems;
                //parseInt(nextCart[existingIndex].numberOfItems + 
                nextCart[existingIndex] = {
                    ...action.payload,
                    numberOfItems: newQuantity,
                };
            } else {
                nextCart.push(action.payload);
            }
            return {
                ...state,
                FavItems: nextCart,
            };
        }
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                Product: action?.payload?.data
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action?.payload?.message
            }
        default:
            return state
    }
}