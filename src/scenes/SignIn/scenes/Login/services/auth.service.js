import {API} from '../../../../../api/Api.js';

export const authService = {
    login
};

async function login(username,password){
    const response = await API.post('/witness/users/login',{username,password});
    return response;        
}
