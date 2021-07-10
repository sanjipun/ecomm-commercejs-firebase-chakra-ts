import { ofType } from "redux-observable";
import { API } from "Redux/Apis";
import { of } from "rxjs";
import { catchError } from "rxjs";
import { mergeMap } from "rxjs";
import { from } from "rxjs";
import { flatMap } from "rxjs";
import { GetLandingProductsFailure, GetLandingProductsSuccess } from "./LandingAction";
import { GET_LANDING_PRODUCTS_REQUEST } from "./LandingConstant";

const LandingApi = () => API.get("/v1/products")
export const LandingEpic = (action$: any) =>
    action$.pipe(
        ofType(GET_LANDING_PRODUCTS_REQUEST),
        flatMap(() => from(LandingApi())
            .pipe(mergeMap((response: any) => of(GetLandingProductsSuccess(response))),
                catchError((err: any) => of(GetLandingProductsFailure(err)))
            )
        )
    )