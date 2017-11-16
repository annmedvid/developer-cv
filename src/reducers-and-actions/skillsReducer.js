import createReducer from './reducerFactory'

import {GET_SKILLS_SUCCESS, GET_SKILLS_FAILED} from '../constants/actions'

const INITIAL_STATE = {
    skills: [],
    skillsError: false
}

const reducerMap = {
    [GET_SKILLS_SUCCESS]: (state, skills) => ({
        ...state,
        skillsError: false,
        skills,
    }),
    [GET_SKILLS_FAILED]: (state) => ({
        ...INITIAL_STATE,
        skillsError: true,
    }),
}

export default createReducer(reducerMap, INITIAL_STATE)
