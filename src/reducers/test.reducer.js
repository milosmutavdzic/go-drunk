import { testConstants } from '../constants/test.constants'

const initialState = {
    loading: false,   
    data: undefined,
    error: false,  
}

export function test(state = initialState, action) {
    switch (action.type) {
        case testConstants.TEST_FETCH_REQUEST:
            return { ...state, loading: true };
        case testConstants.TEST_FETCH_SUCCESS:
            return { ...state, loading: false, data: action.data };
        case testConstants.TEST_FETCH_FAILURE:
            return { ...state, loading: false, data: {},  error: action.error };                    
        default:
            return state;
    }
}