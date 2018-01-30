import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem'
import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import { List } from 'material-ui/List'


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
  width: '45%',
  paddingLeft: '55%',
  paddingTop: '3px'
}

const inkBarStyle = {
  backgroundColor:'#fff'
}

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false }
  }

  handleClose = () => this.setState({ open: false });

  render () {
    return (
      <div>

        <AppBar        
          title={
            <Tabs className='hide-on-small-only' onChange={this.onChangeTabs} style={tabStyle} inkBarStyle={inkBarStyle}>
            <Tab label="home" containerElement={<Link to="/" />} />
              <Tab label="about" containerElement={<Link to="/about" />} />
              <Tab label="work" data-route="/work"  containerElement={<Link to="/work" />} />
              <Tab label="contact" containerElement={<Link to="/contact" />} />
            </Tabs>
          }
          iconStyleLeft={burgerStyle}
          showMenuIconButton={false}     
          iconElementRight={ 
            <div>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> 
              <IconButton onTouchTap={ () => this.setState({ open: !this.state.open }) }> 
                <FontIcon className="material-icons hide-on-med-and-up" color="white">menu</FontIcon>
              </IconButton>
            </div>
          }
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

export default Navigation;