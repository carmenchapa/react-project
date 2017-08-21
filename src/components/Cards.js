import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import data from '../data/cards.json'


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


let Cards = class Cards extends Component {
	
	//  state = {}
	createCard (card) {
		return (

					<Card
						style={cardStyles}>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
					    <CardMedia>
					    <div>
					      <FontIcon 
					      	className="material-icons" 
					      	style={iconStyles} >{card.icon}

					      </FontIcon>
					      </div>
					    </CardMedia>
					    <CardTitle title="Card title" subtitle="Card subtitle" />
					    <CardText>{card.caption}</CardText>
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
							    className="material-icons">favorite
				      		 </FontIcon>
						  </IconButton>
						  >
						   
					    </CardActions>
					</Card>
			)
	}

	createCards(cards) {
    return cards.map(this.createCard);
  }

	render () {

		return (
			<div className="container">
		        <div className="row">           
				            {this.createCards(data.cards)}		        
		        </div>
		      </div>
			)
		
	}
}

export default Cards