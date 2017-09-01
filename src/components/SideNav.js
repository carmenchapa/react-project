import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
// import AppBarSubComponent from './AppBarSubComponent'
import {Tabs, Tab} from 'material-ui/Tabs'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem'
import { List } from 'material-ui/List'



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

]

const burgerStyle = {
    position: 'absolute',
    right: '0px'
}

const tabStyle = {
  width: '35%',
  paddingLeft: '65%',
  paddingTop: '3px'
}

const inkBarStyle = {
  backgroundColor:'#fff'
}

// function handleActive(tab) {
//   alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
// }


class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false }
  }


  handleClose = () => this.setState({ open: false });

  // handleActive = (tab) => alert(`A tab with this route property ${tab.props['data-route']} was activated.`);

  render () {
    return (
      <div>
      
        <AppBar
        
          title={
            <Tabs className='hide-on-small-only' onChange={this.onChangeTabs} style={tabStyle} inkBarStyle={inkBarStyle}>
              <Tab label="about" containerElement={<Link to="/about" />} />
              <Tab label="work" data-route="/work"  containerElement={<Link to="/work" />} />
              <Tab label="contact" containerElement={<Link to="/contact" />} />
            </Tabs>
          }
          iconClassNameRight='show-on-small'
          
          
          iconStyleLeft={burgerStyle}
          // iconElementLeft='muidocs-icon-navigation-expand-more'
          onRightIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
        >
            
        </AppBar>
        <Drawer
          openSecondary={true}
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
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
          </List>
          
        </Drawer>
      </div>
    )
  }
}

export default SideNav;