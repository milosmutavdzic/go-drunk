import { combineReducers } from 'redux';
import {auth} from '../scenes/SignIn/scenes/Login/reducers/auth.reducer';


const rootReducer = combineReducers({
    auth
});

export default rootReducer;