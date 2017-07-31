import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/Menu';


const styleSheet = createStyleSheet('NavBar', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
  	flex: 1,
  }
});


function NavBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
        	<IconButton color="contrast" aria-label="Menu">
        		<MenuIcon />
        	</IconButton>
          <Typography type="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(NavBar);