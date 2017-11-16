import React from 'react'
import PropTypes from 'prop-types'
import injectPropsAndState from '../utils/decorators/injectPropsAndState'
import KeyGenerator from '../utils/keyGenerator'

export default class SkillItem extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            maxLevel: 10
        }
    }

    @injectPropsAndState
    render({skill}, {maxLevel}) {
        const {name, level} = skill

        let levelItems = []
        for (let i = 0; i < maxLevel; i++) {
            let item = <span className="level-item" key={KeyGenerator.getNext()}></span>
            if (i < level) {
                item = <span className="level-item marked" key={KeyGenerator.getNext()}></span>
            }
            levelItems.push(item)
        }

        return <div className="item-wrapper">
            <dt className="item-name">
                {name}
            </dt>
            <dd className="item-level">
                {levelItems}
            </dd>
        </div>
    }
}

SkillItem.propTypes = {
    skill: PropTypes.shape({
        name: PropTypes.string,
        level: PropTypes.number
    }),
}
