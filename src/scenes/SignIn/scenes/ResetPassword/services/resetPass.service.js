import {API} from '~/src/api/Api.js';

export const resetPassService = {
    resetPassword
};


async function resetPassword(resetPassData){
    const response = await API.post(`/reset-pass`, resetPassData);
    return response;
}