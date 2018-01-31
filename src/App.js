import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'


// import logo from './logo.svg';
import './App.css';
import './styles/materialize-grid.css'
import './styles/materialize-mediaqueries.css'
import './styles/responsive-text.css'

// import { createStore, applyMiddleware, compose } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import reducer from './reducers'

import { BrowserRouter, Route } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Navigation from './components/Navigation'

/* views */
import Home from './views/Home'
import About from './views/About'
import Work from './views/Work'
import Contact from './views/Contact'


// const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

// const store = createStore(
//   reducer,
//   compose(
//    applyMiddleware(thunk),
//    window.devToolsExtension ? window.devToolsExtension() : f => f
//  ))


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
		// comments: state.comments
	}
}


function mapDispatchToProps(dispatch) {
	return  bindActionCreators (actions, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;
