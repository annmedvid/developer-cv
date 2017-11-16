import {call, put, takeEvery, all, fork} from 'redux-saga/effects'

import {GET_SKILLS, SEND_REQUEST} from './constants/actions'
import {getSkillsSuccess, getSkillsFailed} from './reducers-and-actions/skillsActions'
import {sendRequestSuccess, sendRequestFailed} from './reducers-and-actions/contactActions'
import {fetchSkills, fetchRequest} from './utils/fakeApi'

function* fetchGetSkills() {
    try {
        const skills = yield call(fetchSkills)

        yield put(getSkillsSuccess(skills))
    } catch (e) {
        yield put(getSkillsFailed())
    }
}

function* watchGetSkills() {
    yield takeEvery(GET_SKILLS, fetchGetSkills)
}

function* fetchSendRequest(action) {
    try {
        const {name, email, message} = action.payload
        console.log(`${name} (${email}) send new message: ${message}`)

        yield call(fetchRequest, action.payload)

        yield put(sendRequestSuccess())
    } catch (e) {
        yield put(sendRequestFailed())
    }
}

function* watchSendRequest() {
    yield takeEvery(SEND_REQUEST, fetchSendRequest)
}

export default function* rootSaga() {
    yield all([
        fork(watchGetSkills),
        fork(watchSendRequest)
    ])
}
