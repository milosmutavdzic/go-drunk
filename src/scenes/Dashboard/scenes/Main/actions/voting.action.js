import { votingService } from '../services/voting.service.js';
import { votingConstants } from '../constants/voting.constants.js';

export const votingActions = {
    vote
};

export const authActions = {
    vote,
};

function vote( votingData,successHandler, errorHandler) {    
    return async dispatch => {
        try {
            dispatch(request());
            const result = await votingService(votingData);           
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
