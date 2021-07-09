import { Reducer } from "react"
import { ADD_TO_CART, ADD_TO_FAV } from "./ProductTopConstant"

const INIT_STATE = {
    CartItems: [],
    FavItems: false,
    loading: false,
    error: false
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
        default:
            return state
    }
}