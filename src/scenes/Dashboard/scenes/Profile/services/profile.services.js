import { API } from '~/src/api/Api.js';
import { setAuthToken } from '~/src/api/setAuthToken.js';


export const profileServices = {
    getProfileData,
    saveProfileData,
}

async function getProfileData(id){
    setAuthToken();
    const response =  await API.get(`/users?id=${id}`);
    return response.data
}

async function saveProfileData(profile){
    setAuthToken();
    const response = await API.put(`/users?id=${profile.id}`,{"data":profile})
    return response.data
}