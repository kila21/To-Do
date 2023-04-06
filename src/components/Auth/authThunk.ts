import axios from 'axios'
import { AuthInputs } from '../../types/authInputs.type'
import { error, signIn, signUp } from '../../store/auth/auth.slice'

export const userSignUp  = (data: AuthInputs) => {
    const changedData = {...data,returnSecureToken: true}
    const key = 'AIzaSyCVo-t8g6RvsYND6ZvPeK5WX-Xnm-_RP-k'
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`

    return async (dispatch: any) => {
        await axios.post(url,changedData)
        .then(res => {
            return dispatch(signUp())
        })
        .catch(err => {
            dispatch(error(err.response.data.error.message))
            throw new Error(err.response.data.error.message)
        })
    }
}

export const userSignIn = (data: AuthInputs) => {
    const changedData = {...data,returnSecureToken: true}
    const key = 'AIzaSyCVo-t8g6RvsYND6ZvPeK5WX-Xnm-_RP-k'
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`

    return async (dispatch: any) => {
        await axios.post(url,changedData)
        .then(res => {
            return dispatch(signIn(res.data.idToken))
        })
        .catch(err => {
            dispatch(error(err.response.data.error.message));
            throw new Error(err.response.data.error.message)
        })
    }
}