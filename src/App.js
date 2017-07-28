import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
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
        <div className="App">
         <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          >
          
            <NavLink activeClassName='active' exact to='/'><MenuItem onTouchTap={this.handleClose}>Home
          </MenuItem></NavLink>

            <NavLink activeClassName='active' to='/about'><MenuItem onTouchTap={this.handleClose}>About
          </MenuItem></NavLink>

          
            <NavLink activeClassName='active' to='/work'><MenuItem onTouchTap={this.handleClose}>Work
          </MenuItem></NavLink>

          
            <NavLink activeClassName='active' to='/contact'><MenuItem onTouchTap={this.handleClose}>Contact
          </MenuItem></NavLink>
        </Drawer>

        <Route 
          exact 
          path='/' 
          render={() => <h1>Home View</h1>} />
        <Route 
          exact 
          path='/about' 
          render={() => <h1>About</h1>} 
        />

        <Route 
          exact 
          path='/work' 
          render={() => <h1>Work</h1>} 
        />

        <Route 
          exact 
          path='/contact' 
          render={() => <h1>Contact</h1>} 
        />

      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
