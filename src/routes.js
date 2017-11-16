import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ProfilePageContainer from './pages/profile/ProfilePageContainer'

export default (
  	<Switch>
    	<Route path="/profile" component={ProfilePageContainer} />
    	<Redirect from="*" to="profile" />
  	</Switch>
)
