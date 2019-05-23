import { locationServices } from '../services/location.services';
import { locationConstants } from '../constants/location.constants.js'

const { addlocationConstants } = locationConstants;

function addlocation( locationData, successHandler, errorHandler) {    
    return async dispatch => {
        try {
            dispatch(request());
            const result = await locationServices.addLocation(locationData);           
            if (result.status == 200) {
                dispatch(success(result.data));
                successHandler(result.data.message);
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
    function request() { return { type: addlocationConstants.ADD_LOCATION_REQUEST }; }
    function success(data) { return { type: addlocationConstants.ADD_LOCATION_SUCCESS, data }; }
    function failure(error) { return { type: addlocationConstants.ADD_LOCATION_FAILURE, error }; }
}

export const addLocationActions = {
    addlocation
};