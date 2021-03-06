import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'


import './App.css';
import './styles/materialize-grid.css'
import './styles/materialize-mediaqueries.css'
import './styles/responsive-text.css'

import { BrowserRouter, Route } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Navigation from './components/Navigation'

/* views */
import Home from './views/Home'
import About from './views/About'
import Work from './views/Work'
import Contact from './views/Contact'


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
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
      </div>
      </BrowserRouter>
      
    );
  }
}


function mapStateToProps(state) {
	return {
		posts: state.posts,
	}
}

function mapDispatchToProps(dispatch) {
	return  bindActionCreators (actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
