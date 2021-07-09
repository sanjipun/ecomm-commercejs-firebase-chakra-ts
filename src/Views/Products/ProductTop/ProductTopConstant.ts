export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_FAV = "ADD_TO_FAV";

export interface AddToCartTypes {
    productName: string,
    numberOfItems: number,
    size: string,
    category: string,
    color: string
}

export interface AddToFavTypes {
    productName: string,
    numberOfItems: number,
    size: string,
    category: string,
    color: string
}