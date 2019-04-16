import {API} from '../api/Api.js';

export const testService = {
    getData
};

async function getData(){
    const response = await API.get('/posts');
    return response.data;        
}


