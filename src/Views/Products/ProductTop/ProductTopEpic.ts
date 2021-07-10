import { AxiosResponse } from "axios"
import { ofType } from "redux-observable"
import { API } from "Redux/Apis"
import { of } from "rxjs"
import { catchError } from "rxjs"
import { mergeMap } from "rxjs"
import { from } from "rxjs"
import { flatMap } from "rxjs"
import { GetProductFailure, GetProductSuccess } from "./ProductTopAction"
import { GET_PRODUCT_REQUEST } from "./ProductTopConstant"

export const ProductTopApi = (data: any) => API.get(`/v1/products/${data}`)

export const ProductTopEpic = (action$: any) =>
    action$.pipe(
        ofType(GET_PRODUCT_REQUEST),
        flatMap((action: any) => from(ProductTopApi(action.payload))
            .pipe(mergeMap((response: AxiosResponse) => of(GetProductSuccess(response))),
                catchError((err: AxiosResponse) => of(GetProductFailure(err)))
            )
        )
    )