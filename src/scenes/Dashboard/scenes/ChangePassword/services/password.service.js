import {MOCK_API} from '~/src/api/Api.js';

export const passwordService = {
    changePassword
}

async function changePassword({oldPassword,newPassword}){
    const response = await MOCK_API.get(`/changePassword?status=ok&oldPassword=${oldPassword}&newPassword=${newPassword}`)
    return response.data[0]
}