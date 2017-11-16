import React, {Component} from 'react'
import PropTypes from 'prop-types'
import injectState from '../utils/decorators/injectState'

export default class ProfileContact extends Component {
	constructor(props) {
		super(props)
		this.state = this.getDefaultState()
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.isRequestSended) {
			this.setState({
                ...this.getDefaultState(),
                wasSended: true,
            })
		}
		if (nextProps.requestError) {
			this.setState({error: true})
		}
	}

    getDefaultState = () => {
        return {
            contactRequest: {
				name: '',
				email: '',
				message: '',
			},
			error: false,
            wasSended: false,
        }
    }

	handleInputChange = (e) => {
		const {contactRequest} = this.state
		const {id, value} = e.target
		const newContactRequest = contactRequest

		newContactRequest[id] = value

		console.log(`${id} was changed to ${value}`)

		this.setState({
			contactRequest: newContactRequest,
			error: false,
            wasSended: false,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const {contactRequest} = this.state
        const {sendRequest} = this.props

        sendRequest(contactRequest)
	}

	@injectState
    render({contactRequest, error, wasSended}) {
    	let {name, email, message} = contactRequest
    	return <article className="profile-contact" id="contact">
            <h3 className="contact-title">Contact</h3>
            <section className="contact-list">
                <h4 className="phone-title">Phone number</h4>
                <p className="phone">+38066-66-66-666</p>
                <h4 className="email-title">Email</h4>
                <p className="email">mail@gmail.com</p>
                <h4 className="skype-title">Skype</h4>
                <p className="skype">mySkypeAcc</p>
            </section>
            <form className="contact-request" onSubmit={e => this.handleSubmit(e)}>
            	<label htmlFor="name" className="visually-hidden">Name</label>
                <input
                	id="name"
                	value={name}
                	placeholder="Name"
                    required
                    onChange={e => this.handleInputChange(e)}/>
            	<label htmlFor="email"  className="visually-hidden">Email</label>
            	<input
            		type="email"
            		id="email"
            		value={email}
            		placeholder="Email"
            		required
            		onChange={e => this.handleInputChange(e)}/>
            	<label htmlFor="message"  className="visually-hidden">Message</label>
            	<textarea
            		id="message"
            		value={message}
            		placeholder="Send a message"
            		rows="4"
            		required
            		onChange={e => this.handleInputChange(e)}></textarea>
            	<button type="submit">send</button>
            </form>
            {wasSended && <strong className="contact-message">Your message was sended.</strong>}
            {error && <strong className="contact-message">Sorry, something went wrong. Please try later.</strong>}
    	</article>
    }
}

ProfileContact.propTypes = {
    sendRequest: PropTypes.func,
    isRequestSended: PropTypes.bool,
    requestError: PropTypes.bool
}
