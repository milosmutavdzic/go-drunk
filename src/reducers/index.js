import { combineReducers } from 'redux';
import { auth } from '../scenes/SignIn/scenes/Login/reducers/auth.reducer';
import { reg } from '../scenes/SignIn/scenes/Register/reducers/register.reducer';
import { vote } from '../scenes/Dashboard/scenes/Main/reducers/voting.reducer';
import { locations } from '../scenes/Dashboard/scenes/Main/reducers/getlocations.reducer';

const rootReducer = combineReducers({
    auth,
    reg,
    vote,
    locations
});

export default rootReducer;