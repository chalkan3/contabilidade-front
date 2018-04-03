import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

import reducer from './main/Reducers.js'
import AuthOrApp from './main/AppOrAuth.jsx'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducer, devTools)

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
