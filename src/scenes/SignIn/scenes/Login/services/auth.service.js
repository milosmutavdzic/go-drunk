import {API} from '../../../../../api/Api.js';

export const authService = {
    login
};

async function login(username,password){
    const response = await API.post('/authenticate',{username,password});
    return response;        
}
