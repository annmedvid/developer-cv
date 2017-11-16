import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
ReactDOM.render(
		<HashRouter>
			{routes}
		</HashRouter>
  	document.querySelector('.app')
)
