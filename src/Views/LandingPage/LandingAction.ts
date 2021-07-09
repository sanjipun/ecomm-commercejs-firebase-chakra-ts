import { GET_LANDING_PRODUCTS_FAILURE, GET_LANDING_PRODUCTS_REQUEST, GET_LANDING_PRODUCTS_SUCCESS } from "./LandingConstant";

export const GetLandingProductsRequest = () => ({ type: GET_LANDING_PRODUCTS_REQUEST });
export const GetLandingProductsSuccess = (response: any) => ({ type: GET_LANDING_PRODUCTS_SUCCESS, payload: response });
export const GetLandingProductsFailure = (error: any) => ({ type: GET_LANDING_PRODUCTS_FAILURE, payload: error });