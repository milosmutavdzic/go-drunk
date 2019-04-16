import {API} from '../../../../../../api/Api.js';

export const userServices={
    getSunDataKey,
    createNewUser,
    createNewUserWithData,
    insertUserData
}

function getSunDataKey(){
    API.get("/witness/encryption/dataKey")
}

function createNewUserWithData(userData){
    API.post("/witness/create_user_with_data",userData)
}

function createNewUser(userData){
    API.post("/witness/users/create", userData)
}

function insertUserData(userData){
    API.post("/witness/users/insertData", userData)
}