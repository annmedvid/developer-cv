import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {getSkills} from '../../reducers-and-actions/skillsActions'
import {sendRequest} from '../../reducers-and-actions/contactActions'
import injectProps from '../../utils/decorators/injectProps'
import ProfilePage from './ProfilePage'

const mapStateToProps = (store) => ({
    skills: store.skillsReducer.skills,
    skillsError: store.skillsReducer.skillsError,
    isRequestSended: store.contactReducer.isRequestSended,
    requestError: store.contactReducer.requestError
})

@connect(mapStateToProps, { getSkills, sendRequest })
export default class ProfilePageContainer extends Component {
    componentDidMount = () => {
        const {getSkills} = this.props
        getSkills()
    }

    sendRequest = (request) => {
        const {sendRequest} = this.props
        sendRequest(request)
    }

    @injectProps
    render({skills, skillsError, isRequestSended, requestError}) {
        return <ProfilePage
            skills={skills}
            skillsError={skillsError}
            isRequestSended={isRequestSended}
            requestError={requestError}
            sendRequest={this.sendRequest}/>
    }
}

ProfilePageContainer.propTypes = {
    skills: PropTypes.array,
    skillsError: PropTypes.bool,
    isRequestSended: PropTypes.bool,
    requestError: PropTypes.bool
}
