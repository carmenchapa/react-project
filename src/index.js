import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import cards from './data/cards'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#FFC400',
  },
  appBar: {
    height: 55,
  },
});

const defaultState = {
	posts: cards
}

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
   applyMiddleware(thunk),
   window.devToolsExtension ? window.devToolsExtension() : f => f
 ))




ReactDOM.render(
<Provider store={store}>
<MuiThemeProvider muiTheme={muiTheme}>
<App />
</MuiThemeProvider>
</Provider>

, document.getElementById('root'));
registerServiceWorker();
