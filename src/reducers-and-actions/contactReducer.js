import createReducer from './reducerFactory'

import {SEND_REQUEST_SUCCESS, SEND_REQUEST_FAILED} from '../constants/actions'

const INITIAL_STATE = {
    isRequestSended: false,
    requestError: false,
}

const reducerMap = {
    [SEND_REQUEST_SUCCESS]: (state) => ({
        ...INITIAL_STATE,
        isRequestSended: true,
    }),
    [SEND_REQUEST_FAILED]: (state) => ({
        ...INITIAL_STATE,
        requestError: true,
    }),
}

export default createReducer(reducerMap, INITIAL_STATE)
