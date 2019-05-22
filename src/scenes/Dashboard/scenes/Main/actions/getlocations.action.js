import { locationServices } from '../services/location.services';
import { locationConstants } from '../constants/location.constants.js'

const { getlocationsConstants } = locationConstants;

function getlocations(errorHandler) {    
    return async dispatch => {
        try {
            dispatch(request());
            const result = await locationServices.getlocations();
            if (result.status == 200) {
                dispatch(success(result.data));
            }
            else {
                dispatch(failure(result));
            }
        }
        catch (error) {
            dispatch(failure(error));
            errorHandler(error.response.error);
        }
    }
    function request() { return { type: getlocationsConstants.GET_LOCATIONS_REQUEST }; }
    function success(data) { return { type: getlocationsConstants.GET_LOCATIONS_SUCCESS, data }; }
    function failure(error) { return { type: getlocationsConstants.GET_LOCATIONS_FAILURE, error }; }
}

export const getlocationsActions = {
    getlocations
};