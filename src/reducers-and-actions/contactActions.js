import { SEND_REQUEST, SEND_REQUEST_SUCCESS, SEND_REQUEST_FAILED } from '../constants/actions'

export const sendRequest = (request) => ({
    type: SEND_REQUEST,
    payload: request
})

export const sendRequestSuccess = () => ({
    type: SEND_REQUEST_SUCCESS
})

export const sendRequestFailed = () => ({
    type: SEND_REQUEST_FAILED
})
