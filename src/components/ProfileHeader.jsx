import React from 'react'
import Scrollchor from 'react-scrollchor'

export default class ProfileHeader extends React.PureComponent {
    render() {
    	return <header className="profile-header">
            <h1 className="profile-title">name surname</h1>
            <h2 className="profile-sub-title">front-end developer</h2>
            <nav className="navbar">
                <Scrollchor to="" className="navbar-link">Home</Scrollchor>
                <Scrollchor to="about" className="navbar-link">About</Scrollchor>
                <Scrollchor to="skills" className="navbar-link">Skills</Scrollchor>
                <Scrollchor to="contact" className="navbar-link">Contact</Scrollchor>
            </nav>
    	</header>
    }
}
