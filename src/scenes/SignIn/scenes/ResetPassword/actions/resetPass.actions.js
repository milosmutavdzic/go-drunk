import { resetPassConstants } from '../constants/resetPass.constants';
import { resetPassService } from '../services/resetPass.service';

export const resetPassActions = {
    resetPass
};

function resetPass(password, rpassword, errorHandler) {    
    return async dispatch => {
        try {
            dispatch(request());
            const result = await resetPassService.resetPass( password, rpassword);           
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
    function request() { return { type: resetPassConstants.RESET_PASSWORD_REQUEST }; }
    function success(data) { return { type: resetPassConstants.RESET_PASSWORD_SUCCESS, data }; }
    function failure(error) { return { type: resetPassConstants.RESET_PASSWORD_FAILURE, error }; }
}

