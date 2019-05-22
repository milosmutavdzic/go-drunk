import { locationConstants } from '../constants/location.constants.js'

const { votingConstants } = locationConstants;

const initialState = {
    loading:false,
    error:undefined,
}

export function vote(state = initialState, action) { 
    switch (action.type) {
        case votingConstants.VOTING_REQUEST:
            return { ...state, loading: true };
        case votingConstants.VOTING_SUCCESS:
            return { ...state, loading: false, data: action.data };
        case votingConstants.VOTING_FAILURE:
            return { ...state, loading: false, error: action.error};                  
        default:
            return state;
    }
}