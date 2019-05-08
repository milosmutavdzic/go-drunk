import { API } from '~/src/api/Api.js';

export const getLocationsService = {
    getlocations
}

async function getlocations(){
    try {
    const response = await API.get(`/locations`)
    return response.data
    } catch(error) {
        throw new Error(`Something went wrong while fetching patrol locations: ${error}`);
    }
}