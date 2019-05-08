import { registerConstants } from '../constants/register.constants';
import { registerServices } from '../services/register.services';

export const registerActions = {
    register
};

function register(userData, errorHandler) {
    return async dispatch => {
        try {
            dispatch(request());
            const result = await registerServices.createNewUser(userData);           
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
    function request() { return { type: registerConstants.REGISTER_REQUEST }; }
    function success(data) { return { type: registerConstants.REGISTER_SUCCESS, data }; }
    function failure(error) { return { type: registerConstants.REGISTER_FAILURE, error }; }
}