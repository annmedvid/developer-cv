import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import routes from './routes'

let store = createStore(
	rootReducer,
)

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			{routes}
		</HashRouter>
  	</Provider>,
  	document.querySelector('.app')
)
