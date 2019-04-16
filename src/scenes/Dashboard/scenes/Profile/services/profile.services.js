import {MOCK_API} from '~/src/api/Api.js';

export const profileServices = {
    getProfileData,
    saveProfileData,
}

async function getProfileData(){
    const response =  await MOCK_API.get("/profile?status=ok");
    return response.data[0]
}

async function saveProfileData(profile, error){
    if(error==true){
        const response = await MOCK_API.get("/profile/1")
        return response.data
    }
    else{
        const response = await MOCK_API.patch("/profile/0",{"data":profile})
        return response.data
    }
}