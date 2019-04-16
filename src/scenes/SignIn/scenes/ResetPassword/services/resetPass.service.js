import {MOCK_API} from '~/src/api/Api.js';

export const resetPassService = {
    requestCode,
    confirmPassword
};

async function requestCode({email}){
    const response = await MOCK_API.get(`/requestCode?status=ok&email=${email}`);
    return response.data[0];        
}

async function confirmPassword({code,new_password}){
    const response = await MOCK_API.get(`/confirmPassword?status=ok&code=${code}&password=${new_password}`);
    return response.data[0];
}