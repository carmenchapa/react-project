import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import LikeIconButton from './LikeIconButton';
import data from '../data/cards.json'


const cardStyles = {
		padding: '20px',
		paddingTop: '50px',
		boxShadow: 'none'
}

const iconStyles = {
		  fontSize: '4rem'
	}

const actionButton = {
	marginLeft: '8px'
}






let Cards = class Cards extends Component {
	
	//  state = {}

	hoveredStyle = () => this.setState({open: false});
	createCard (card) {
		return (

					<div className="col s12 m6 l4" key={card.code}>
					<Card style={cardStyles}>
					    <CardMedia>
					    <div>
					      <FontIcon 
					      	className="material-icons" 
					      	color="#FFC400"
					      	style={iconStyles} 
					      >{card.icon}

					      </FontIcon>
					      </div>
					    </CardMedia>
					    <CardTitle title={card.title} subtitle={card.subtitle} />
					    <CardText>{card.caption}</CardText>
					    <CardActions> 
					      <FlatButton label="Action" style={actionButton} />
					      <LikeIconButton color="#9e9e9e" hoverColor="#ef9a9a" />    
					    </CardActions>
					</Card>
					</div>
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