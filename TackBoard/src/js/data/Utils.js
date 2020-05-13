import { create } from 'apisauce';
import authLogicState from '../states/authLogic';

// define the api
const { accessToken } = authLogicState;

export const api = create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json'
    },
});
