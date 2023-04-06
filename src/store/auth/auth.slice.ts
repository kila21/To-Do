import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../../types/authState.type";

const initialState: authState = {
    user: false,
    error: null,
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        signIn: (state) => {
            state.user = true;
            state.error = null
        },

        signUp: (state) => {
            //...... middlwerar unda davamtot ro useri chaweros firebaseshi 
        },
        error: (state,actions) => {
            state.error = actions.payload
        }
    }
})

export const {signIn, signUp, error } = authSlice.actions

export default authSlice.reducer