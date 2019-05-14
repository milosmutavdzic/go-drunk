import { API } from '~/src/api/Api.js';

export async function getlocationsService(){
    const response = await API.get(`/locations`)
    return response;
}