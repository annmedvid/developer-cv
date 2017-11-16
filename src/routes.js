import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ProfilePageContainer from './pages/profile/ProfilePageContainer'

export default (
  	<Switch>
    	<Route path="/home" component={ProfilePageContainer} />
    	<Redirect from="*" to="home" />
  	</Switch>
)
