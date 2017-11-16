import { combineReducers } from 'redux'
import skillsReducer from './reducers-and-actions/skillsReducer'
import contactReducer from './reducers-and-actions/contactReducer'

const rootReducer = combineReducers({
    skillsReducer,
    contactReducer
})

export default rootReducer
