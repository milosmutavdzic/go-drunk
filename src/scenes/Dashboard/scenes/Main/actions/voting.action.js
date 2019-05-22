import { locationServices } from '../services/location.services';
import { locationConstants } from '../constants/location.constants.js'

const { votingConstants } = locationConstants;

function vote( votingData,successHandler, errorHandler) {    
    return async dispatch => {
        try {
            dispatch(request());
            const result = await locationServices.vote(votingData);           
            if (result.status == 200) {
                dispatch(success(result.data.updatedLocation));
                successHandler();
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
    function request() { return { type: votingConstants.VOTING_REQUEST }; }
    function success(data) { return { type: votingConstants.VOTING_SUCCESS, data }; }
    function failure(error) { return { type: votingConstants.VOTING_FAILURE, error }; }
}

export const votingActions = {
    vote
};