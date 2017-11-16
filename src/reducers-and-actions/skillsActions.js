import {GET_SKILLS, GET_SKILLS_SUCCESS, GET_SKILLS_FAILED} from '../constants/actions'

export const getSkills = () => ({
    type: GET_SKILLS
})

export const getSkillsSuccess = (payload) => ({
    type: GET_SKILLS_SUCCESS,
    payload
})

export const getSkillsFailed = () => ({
    type: GET_SKILLS_FAILED
})
