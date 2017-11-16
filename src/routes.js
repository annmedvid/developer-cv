import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
export default (
  	<Switch>
    	<Redirect from="*" to="home" />
  	</Switch>
)
