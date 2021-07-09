import { AddToCartTypes, AddToFavTypes, ADD_TO_CART, ADD_TO_FAV } from "./ProductTopConstant";

export const AddToCart = (data: AddToCartTypes) => ({ type: ADD_TO_CART, payload: data });
export const AddToFav = (data: AddToFavTypes) => ({ type: ADD_TO_FAV, payload: data });