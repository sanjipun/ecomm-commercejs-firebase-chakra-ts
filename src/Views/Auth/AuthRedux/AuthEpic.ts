import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, mergeMap, flatMap, tap } from "rxjs/operators";
import { PostLoginFailure, PostLoginSuccess, PostRegisterFailure, PostRegisterSuccess } from "./AuthAction";
import { POST_LOGIN_REQUEST, POST_REGISTER_REQUEST } from "./AuthConstants";
import firebase from "Firebase/FirebaseConfig"

export const RegisterEpic = (action$: any) =>
    action$.pipe(
        ofType(POST_REGISTER_REQUEST),
        flatMap((action: any) => from(firebase.app().auth().createUserWithEmailAndPassword(action.payload.email, action.payload.password))
            .pipe(
                tap((response: any) => firebase.firestore().collection("users").doc(response?.user?.uid).set({
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    email: action.payload.email
                })),
                mergeMap((response: any) => of(PostRegisterSuccess(response))),
                catchError((err) => of(PostRegisterFailure(err)))
            )
        )
    )

export const LoginEpic = (action$: any) =>
    action$.pipe(
        ofType(POST_LOGIN_REQUEST),
        flatMap((action: any) => from(firebase.app().auth().signInWithEmailAndPassword(action.payload.email, action.payload.password))
            .pipe(mergeMap((response: any) => of(PostLoginSuccess(response))),
                catchError((err) => of(PostLoginFailure(err)))
            )
        )
    )