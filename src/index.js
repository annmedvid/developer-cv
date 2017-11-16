import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './sagas'
import routes from './routes'
import './styles/main.scss'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			{routes}
		</HashRouter>
  	</Provider>,
  	document.querySelector('.app')
)
