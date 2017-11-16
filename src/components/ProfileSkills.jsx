import React from 'react'
import PropTypes from 'prop-types'
import injectProps from '../utils/decorators/injectProps'
import KeyGenerator from '../utils/keyGenerator'

import SkillItem from './SkillItem'

export default class ProfileSkills extends React.PureComponent {
	@injectProps
    render({skills}) {
    	let skillItems = []
    	if (skills.length) {
    		skillItems = skills.map(skill => <SkillItem skill={skill} key={KeyGenerator.getNext()} />)
    	}

    	return <article className="profile-skills" id="skills">
            <h3 className="skills-title">Skills</h3>
            <dl className="skills-levels">
            	{skillItems}
            </dl>
    	</article>
    }
}

ProfileSkills.propTypes = {
    skills: PropTypes.array
}
