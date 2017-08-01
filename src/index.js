import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#FFC400',
  },
  appBar: {
    height: 55,
  },
});


ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
