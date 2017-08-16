import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import '../styles/materialize-grid.css'
import '../styles/responsive-text.css'
import { BrowserRouter, Route } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import SideNav from '../components/SideNav'

/* views */
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'


injectTapEventPlugin();

class Main extends Component {

    constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <BrowserRouter>
        <div className="App">

         <SideNav />

        <Route 
          exact 
          path='/' 
          component={Home} />
        <Route 
          exact 
          path='/about' 
          component={About} 
        />

        <Route 
          exact 
          path='/work' 
          component={Work} 
        />

        <Route 
          exact 
          path='/contact' 
          component={Contact} 
        />

      </div>
      </BrowserRouter>
      
    );
  }
}

export default Main;
