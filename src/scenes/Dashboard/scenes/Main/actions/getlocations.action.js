import { getlocationsService } from '../services/getlocations.service.js';
import { getlocationsConstants } from '../constants/getlocations.constants.js';

export const getlocationsActions = {
    getlocations
};

function getlocations(errorHandler) {    
    return async dispatch => {
        try {
            dispatch(request());
            const result = await getlocationsService();
            if (result.status == 200) {
                dispatch(success(result.data));
            }
            else {
                dispatch(failure(result));
            }
        }
        catch (error) {   
            dispatch(failure(error.response.error));
            errorHandler(error.response.error);
        }
    }
    function request() { return { type: getlocationsConstants.GET_LOCATIONS_REQUEST }; }
    function success(data) { return { type: getlocationsConstants.GET_LOCATIONS_SUCCESS, data }; }
    function failure(error) { return { type: getlocationsConstants.GET_LOCATIONS_FAILURE, error }; }
}
