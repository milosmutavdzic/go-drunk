import { authConstants } from '../constants/auth.constants.js'

const initialState = {
    isAuthenticated:false,
    loading:false,
    error:undefined,
    jwt_token:undefined,
    id:undefined
}

export function auth(state = initialState, action) { 
    switch (action.type) {
        case authConstants.AUTH_LOGIN_REQUEST:
            return { ...state, loading: true };
        case authConstants.AUTH_LOGIN_SUCCESS:
            return { ...state, loading: false, isAuthenticated:true, jwt_token: action.data.token, id: action.data.id };
        case authConstants.AUTH_LOGIN_FAILURE:
            return { ...state, loading: false, isAuthenticated:false, error: action.error};
        case authConstants.AUTH_LOGOUT:
            return {...state, ...initialState}                   
        default:
            return state;
    }
}