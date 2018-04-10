import css from './style.scss'
import React from 'react'
import { render } from 'react-dom'

import { store } from './src/store/store'
import { BrowserRouter } from "react-router-dom";


import { Provider } from 'react-redux'
import { rootReducer } from './src/store/store'

import { App } from './src/app/App'

render(
	<Provider store={store(rootReducer)}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
	);