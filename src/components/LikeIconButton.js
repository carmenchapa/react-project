import React from 'react'

// import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import Favorite from 'material-ui/svg-icons/action/favorite';



const iconButtonStyles = {
	paddingLeft: '0',
	paddingRight: '0',
	textAlign: 'left',
    // top: '6px',
    // width: '30px',
    // height: '30px',
    // fontSize: '1rem'
}

const tooltipStyles = {
	left: '-4px',
}



const divStyle = {
	marginLeft: '2px'
}


const LikeIconButton = ({ color="grey", hoverColor="#ef9a9a" }) => {

	const likesStyle = {
		marginRight: '3px',
		color: color
	}

	return (

        <div style={divStyle}>
		<span style={likesStyle}>0</span>
		{/*<IconButton 
		  
	      tooltip="like"
	      tooltipPosition="bottom-center"
	      tooltipStyles={tooltipStyles}
	      style={iconButtonStyles}
	      disableTouchRipple={true}
	    >*/}
	    	<Favorite 
	    	color={color} 
	    	hoverColor="#ef9a9a"
		    style={iconButtonStyles}
	      />
   		{/*</IconButton>*/}
	    
	  
	  </div>
	  );

	  };

export default LikeIconButton