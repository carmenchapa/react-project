import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const cardStyles = {
		padding: '20px',
		paddingTop: '50px',
		boxShadow: 'none'
}

const iconStyles = {
		  fontSize: '3rem'
	};

const iconButtonStyles = {
	paddingLeft: '0',
	textAlign: 'left',
    top: '6px'
}

const tooltipStyles = {
	left: '-4px',
}

const likesStyle = {
	marginRight: '3px'
}


class Cards extends Component {
	
	state = {}


	render () {

		return (
		
					<Card
						style={cardStyles}>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
					    <CardMedia>
					    <div>
					      <FontIcon 
					      	className="material-icons" 
					      	style={iconStyles} 
					      	color={this.props.color}>{this.props.icon}

					      </FontIcon>
					      </div>
					    </CardMedia>
					    <CardTitle title="Card title" subtitle="Card subtitle" />
					    <CardText>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					    </CardText>
					    <CardActions>
					     
					      <FlatButton label="Action" />
					      <span style={likesStyle}>0</span>
  
					      <IconButton 
						      tooltip="like"
						      tooltipPosition="bottom-center"
						      tooltipStyles={tooltipStyles}
						      style={iconButtonStyles}
						    >
						    <FontIcon
							    className="material-icons"
							    
					      		color={this.props.color}>favorite
				      		 </FontIcon>
						  </IconButton>
						  >
						   
					    </CardActions>
					</Card>
				
		)
		
	}
}

export default Cards