import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* Material-ui */
// import { MuiThemeProvider } from 'Material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import createMuiTheme from 'material-ui/styles/theme'
// import createPalette from 'material-ui/styles/palette'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
import carTheme from './carTheme';
import SideNav from './SideNav';

/* Import Views */
import Home from './views/Home';
import About from './views/About';
import Work from './views/Work';
import Contact from './views/Contact';


injectTapEventPlugin();

class App extends Component {

    constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={carTheme}>
          <div>
            <SideNav />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/work' component={Work} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </MuiThemeProvider>

      </BrowserRouter>
      
    );
  }
}

export default App;
