import React, { Component } from 'react'
// import AppBar from 'material-ui/AppBar'

import NavBar from './components/NavBar'

import Drawer from 'material-ui/Drawer'
import SideBarItem from './views/SideBarItem'
// import { List, makeSelectable } from 'material-ui/List'
// import { List } from 'material-ui/List'


/*
  Add you nav links here..
    isExact: if true it will be an exact path
    linkTo: the path you want to go
    text: title of the nav item
*/

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/about', text: 'About' },
  { isExact: false, linkTo: '/work', text: 'Work' },
  { isExact: false, linkTo: '/contact', text: 'Contact' }
  // {
  //   isExact: false,
  //   linkTo: '/service-request-form',
  //   text: 'Service Request Form'
  // }
]
class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false }
  }


  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <div>
      <NavBar />
        {/*<AppBar
          title='Title'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
        />*/}
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          
            {links.map((link, i) => {
              return (
                <SideBarItem
                  isExact={link.isExact}
                  linkTo={link.linkTo}
                  primaryText={link.text}
                  handleClose={this.handleClose}
                  key={i}
                />
              )
            })}
          
        </Drawer>
      </div>
    )
  }
}

export default SideNav;