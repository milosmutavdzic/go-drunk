import { getlocationsConstants } from '../constants/getlocations.constants.js'

const initialState = {
    loading: undefined,
    error:undefined,
    markers: null
}

export function locations(state = initialState, action) { 
    switch (action.type) {
        case getlocationsConstants.GET_LOCATIONS_REQUEST:
            return { ...state, loading: true };
        case getlocationsConstants.GET_LOCATIONS_SUCCESS:
            return { ...state, loading: false, markers: action.data.data };
        case getlocationsConstants.GET_LOCATIONS_FAILURE:
            return { ...state, loading: false, error: action.error};                  
        default:
            return state;
    }
}