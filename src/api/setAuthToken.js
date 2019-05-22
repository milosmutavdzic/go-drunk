import { API } from './Api.js';
import { store } from '../store/Store.js';

export function setAuthToken() {
    const token = store.getState().auth.jwt_token;
    API.defaults.headers.common['Authorization'] = '';
    if (token) {
        API.defaults.headers.common['Authorization'] = `${token}`;
    }
}