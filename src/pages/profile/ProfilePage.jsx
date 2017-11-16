import React, {Component} from 'react'
import PropTypes from 'prop-types'

import injectProps from '../../utils/decorators/injectProps'
import ProfileHeader from '../../components/ProfileHeader'
import ProfileAbout from '../../components/ProfileAbout'
import ProfileSkills from '../../components/ProfileSkills'
import ProfileContact from '../../components/ProfileContact'
import ProfileFooter from '../../components/ProfileFooter'

export default class ProfilePage extends Component {
    @injectProps
    render({skills, skillsError, isRequestSended, requestError, sendRequest}) {
        return (
            <div className="profile">
               <ProfileHeader />
               <ProfileAbout />
               <ProfileSkills
                    skills={skills}
                    skillsError={skillsError} />
               <ProfileContact
                    isRequestSended={isRequestSended}
                    requestError={requestError}
                    sendRequest={sendRequest}/>
               <ProfileFooter />
            </div>
        )
    }
}

ProfilePage.propTypes = {
    skills: PropTypes.array,
    skillsError: PropTypes.bool,
    isRequestSended: PropTypes.bool,
    requestError: PropTypes.bool
}
