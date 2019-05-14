import { API } from '~/src/api/Api.js';

export async function votingService(votingData){
    const response = await API.post('/vote', votingData);
    return response;
}