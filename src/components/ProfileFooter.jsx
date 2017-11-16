import React from 'react'

export default class ProfileFooter extends React.PureComponent {
    render() {
    	return <footer className="profile-footer">
    		<address className="footer-address">
	            <a className="phone" href="tel:+380666666666">
	            	<span>Mobile</span>
	            	<span>+38066-66-66-666</span>
	            </a>
	        	<a className="email" href="mailto:mail@gmail.com">
	        		<span>Email</span>
	        		<span>mail@gmail.com</span>
	        	</a>
	        	<a className="skype" href="skype:mySkypeAcc?call">
	        		<span>Skype</span>
	        		<span>mySkypeAcc</span>
	        	</a>
        	</address>
    	</footer>
    }
}
