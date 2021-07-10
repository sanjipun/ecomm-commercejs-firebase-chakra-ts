export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

export interface AddToCartTypes {
    productImage: string,
    productName: string,
    numberOfItems: number,
    size: string,
    category: string,
    color: string,
    price: number,
}

export interface AddToFavTypes {
    productName: string,
    size: string,
    category: string,
    color: string
}