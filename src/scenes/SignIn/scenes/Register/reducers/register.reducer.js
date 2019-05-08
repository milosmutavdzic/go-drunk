import { registerConstants } from '../constants/register.constants'

const initialState = {
    loading:undefined,
    error:undefined,
}

export function reg(state = initialState, action) { 
    switch (action.type) {
        case registerConstants.REGISTER_REQUEST:
            return { ...state, loading: true };
        case registerConstants.REGISTER_SUCCESS:
            return { ...state, loading: false };
        case registerConstants.REGISTER_FAILURE:
            return { ...state, loading: false, error: action.error};                  
        default:
            return state;
    }
}