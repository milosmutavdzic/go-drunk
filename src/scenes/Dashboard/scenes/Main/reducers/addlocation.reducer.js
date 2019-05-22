import { locationConstants } from '../constants/location.constants.js'

const { addlocationConstants } = locationConstants;

const initialState = {
    loading: undefined,
    error:undefined,
}

export function addlocation(state = initialState, action) { 
    switch (action.type) {
        case addlocationConstants.GET_LOCATIONS_REQUEST:
            return { ...state, loading: true };
        case addlocationConstants.GET_LOCATIONS_SUCCESS:
            return { ...state, loading: false };
        case addlocationConstants.GET_LOCATIONS_FAILURE:
            return { ...state, loading: false, error: action.error};                  
        default:
            return state;
    }
}