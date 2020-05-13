import { api } from './Utils'

export function postAuthUser(username, password) {
    return api.post('/auth', {
        'username': username,
        'password': password
    });
};

export function postCreateUser(username, password) {
    return api.post('/users', {
        'username': username,
        'password': password
    });
};
