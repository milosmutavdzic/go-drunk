import { API } from '~/src/api/Api.js';
import { setAuthToken } from '~/src/api/setAuthToken.js';


async function addLocation(locationData){
    setAuthToken();
    const response = await API.post(`/locations`, { data: locationData })
    return response;
}

async function getlocations(){
    setAuthToken();
    const response = await API.get(`/locations`)
    return response;
}

async function vote(votingData){
    setAuthToken();
    const response = await API.post('/vote', votingData);
    return response;
}

export const locationServices = {
    addLocation,
    getlocations,
    vote
};
