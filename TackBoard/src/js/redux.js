import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';

import { api } from './data/Utils';

import { createGenericAlert } from './alerts/GenericAlert';

import createSagaMiddleware from 'redux-saga'

import { AUTH_LOGIC } from './constants/AUTH_LOGIC';

import authLogicState from './states/authLogic';

import { postAuthUser, postCreateUser } from './data/Auth';

import { call, put, takeLatest, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once



// actions.js
export const storeTokens = (accessToken, refreshToken) => ({
    type: AUTH_LOGIC.STORE_TOKENS,
    accessToken,
    refreshToken
});

export const requestAuthUser = (username, password) => ({
    type: AUTH_LOGIC.REQUEST_AUTH_USER,
    username,
    password
});

export const requestCreateUser = (username, password) => ({
    type: AUTH_LOGIC.REQUEST_CREATE_USER,
    username,
    password
});

export const setLoggedIn = (loggedIn) => ({
    type: AUTH_LOGIC.SET_LOGGED_IN,
    loggedIn
});

export const setLogin = (login) => ({
    type: AUTH_LOGIC.SET_LOGIN,
    login
});

export const setCreateAccount = (createAccount) => ({
    type: AUTH_LOGIC.SET_CREATE_ACCOUNT,
    createAccount
});
//
// reducers.js
export const authLogicReducer = (state = authLogicState, action) => {
    switch (action.type) {
        case AUTH_LOGIC.STORE_TOKENS:
            return Object.assign({}, state, {
                accessToken: action.accessToken,
                refreshToken: action.refreshToken
            });
        case AUTH_LOGIC.SET_CREATE_ACCOUNT:
            return Object.assign({}, state, {
                createAccount: action.createAccount
            });
        case AUTH_LOGIC.SET_LOGGED_IN:
            return Object.assign({}, state, {
                loggedIn: action.loggedIn
            });
        case AUTH_LOGIC.SET_LOGIN:
            return Object.assign({}, state, {
                login: action.login
            });
        default:
            return state;
    }
};

export const reducers = combineReducers({
    authLogicReducer
});
//
// sagas.js
export function* authUser(action) {
    const { username, password } = action;
    const response = yield call(postAuthUser, username, password);

    if (response.problem) {
        createGenericAlert('Error', `${response.originalError}`);
    }
    else {
        const {
            access_token: accessToken,
            refresh_token: refreshToken
        } = response.data;

        yield put(storeTokens(accessToken, refreshToken));

        createGenericAlert('User successfully authz\'d', `token: ${accessToken}`);
        console.log(accessToken, refreshToken)
        api.setHeader('Authorization', `Bearer ${accessToken}`);
        yield put(setLoggedIn(true));
    }
}

export function* createUser(action) {
    const { username, password } = action;
    const response = yield call(postCreateUser, username, password);

    if (response.problem) {
        createGenericAlert('Error', `${response.originalError}`);
    }
    else {
        const {
            user_id: userID
        } = response.data;

        createGenericAlert('User successfully created', `ID: ${userID}`);

        //yield put(storeTokens(accessToken, refreshToken));
    }
}

export function* watchRequestAuthUser() {
    yield takeLatest(AUTH_LOGIC.REQUEST_AUTH_USER, authUser)
}

export function* watchRequestCreateUser() {
    yield takeLatest(AUTH_LOGIC.REQUEST_CREATE_USER, createUser)
}

export function* rootSaga() {
    yield all([
        watchRequestAuthUser(),
        watchRequestCreateUser()
    ])
}
//
// store.js
function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)
    return store;
};

export const store = configureStore();