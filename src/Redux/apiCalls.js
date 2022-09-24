import { 
    reset,
    loginFail,
    loginStart,
    loginSuccess,
    registerFail,
    registerStart,
    registerSuccess } from './authRedux'
import {publicRequest} from '../requestMethods'

export const login = async (dispatch,user) =>{
    dispatch(loginStart());

    try {
        const response = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFail())
    }
}

export const register = async (dispatch,user) =>{
    dispatch(registerStart())

    try {
        const response = await publicRequest.post('/auth/register',user)
        dispatch(registerSuccess(response.data));
    } catch (error) {
        dispatch(registerFail())
    }
}

export const logout = (dispatch)=>{
    localStorage.removeItem('currentUser')
    dispatch(reset());
}