import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload){
    try{
        //TODO: api login
        console.log('Hanlde login', payload);
        localStorage.setItem('access_token', 'fake');
        yield put(authActions.loginSuccess({
            id:1,
            name: "Nhat",
        }));
    }
    catch (error) {
        yield put(authActions.loginFailed('error'));
    }
    
}
function* handleLogout(){
    console.log('Handle logout')
    localStorage.removeItem('access_token');
    //redirect login
}
function* watchLoginFlow(){
    while(true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if (!isLoggedIn){
            const action: PayloadAction<LoginPayload> =  yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }
        
        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}


export function* authSaga(){
    yield fork(watchLoginFlow);
}