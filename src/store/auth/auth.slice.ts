import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../../types/authState.type";

const initialState: authState = {
    user: false,
    error: null,
    token: null,
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = true;
            state.error = null
            state.token = action.payload
        },

        signUp: (state) => {
            //...... middlwerar unda davamtot ro useri chaweros firebaseshi 
            state
        },

        logOut: (state) => {
            state.user = false,
            state.token = null,
            state.error = null
        },
        error: (state,action) => {
            state.error = action.payload
        }
    }
})

export const {signIn, signUp, logOut, error } = authSlice.actions

export default authSlice.reducer