import { testConstants } from '../constants/test.constants';
import { testService } from '../services/test.services';

export const testActions = {
    getData
};

function getData() {
    return async dispatch => {      
        try{
            dispatch(request());
            const data = await testService.getData();
            dispatch(success(data));
        }
        catch(error){
            dispatch(failure(error));    
        }                                 
    }    
    function request() { return { type: testConstants.TEST_FETCH_REQUEST }; }
    function success(data) { return { type: testConstants.TEST_FETCH_SUCCESS, data }; }
    function failure(error) { return { type: testConstants.TEST_FETCH_FAILURE, error }; }
}