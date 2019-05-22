import {API} from '../../../../../api/Api';

export const registerServices={
    createNewUser
}

async function createNewUser(userData){
    const response = await API.post('/users', userData);
    return response;
}
