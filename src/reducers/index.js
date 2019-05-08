import { combineReducers } from 'redux';
import {auth} from '../scenes/SignIn/scenes/Login/reducers/auth.reducer';
import {reg} from '../scenes/SignIn/scenes/Register/reducers/register.reducer'

const rootReducer = combineReducers({
    auth,
    reg
});

export default rootReducer;