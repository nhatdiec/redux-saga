import { UndoRounded } from "@material-ui/icons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";
import { RootState, AppThunk } from '../../app/store';

export interface LoginPayload {
    userName: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
}

const initialState : AuthState = {
    isLoggedIn: false,
    logging : false,
    currentUser: undefined
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging =true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.isLoggedIn = true;
            state.logging =false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },

        logout(state){
            state.isLoggedIn = false;
            state.logging = false;
            state.currentUser = undefined;
        },

    }
})

//Actions
export const authActions = authSlice.actions
//Selectors
export const selectIsLoggedIn = (state : RootState) => state.auth.isLoggedIn;
export const selectIsLogging = (state : RootState) => state.auth.logging;


//Reducer
const authReducer = authSlice.reducer;

export default authReducer;