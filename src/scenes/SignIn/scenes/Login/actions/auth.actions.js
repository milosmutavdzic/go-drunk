import { authConstants } from '../constants/auth.constants';
import { authService } from '../services/auth.service';

export const authActions = {
    login,
    logout
};

function login(username, password, errorHandler) {    
    return async dispatch => {
        try {
            dispatch(request());
            const result = await authService.login(username, password);           
            if (result.status == 200) {
                dispatch(success(result.data));
            }
            else {
                dispatch(failure(result));
            }
        }
        catch (error) {   
            dispatch(failure(error.response.data.error));
            errorHandler(error.response.data.error);
        }
    }
    function request() { return { type: authConstants.AUTH_LOGIN_REQUEST }; }
    function success(data) { return { type: authConstants.AUTH_LOGIN_SUCCESS, data }; }
    function failure(error) { return { type: authConstants.AUTH_LOGIN_FAILURE, error }; }
}

function logout() {
    return async dispatch => {
        dispatch({ type: authConstants.AUTH_LOGOUT });
    }
}