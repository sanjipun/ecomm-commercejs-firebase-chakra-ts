import { AddToCartTypes, AddToFavTypes, ADD_TO_CART, ADD_TO_FAV, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./ProductTopConstant";

export const AddToCart = (data: AddToCartTypes) => ({ type: ADD_TO_CART, payload: data });
export const AddToFav = (data: AddToFavTypes) => ({ type: ADD_TO_FAV, payload: data });

export const GetProductRequest = (product_id: string) => ({ type: GET_PRODUCT_REQUEST, payload: product_id });
export const GetProductSuccess = (response: any) => ({ type: GET_PRODUCT_SUCCESS, payload: response });
export const GetProductFailure = (error: any) => ({ type: GET_PRODUCT_FAILURE, payload: error });