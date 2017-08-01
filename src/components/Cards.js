import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {yellow500} from 'material-ui/styles/colors';


const iconStyles = {
		  marginRight: 24,
	};


class Cards extends Component {
	
	state = {}
	render () {

		return (
		
					<Card>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
					    <CardHeader
					      title="URL Avatar"
					      subtitle="Subtitle"
					    />
					    <CardMedia>
					      <FontIcon 
					      	className="material-icons" 
					      	style={iconStyles} 
					      	color={yellow500}>cloud_download
					      </FontIcon>
					    </CardMedia>
					    <CardTitle title="Card title" subtitle="Card subtitle" />
					    <CardText>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					      Donec mattis pretium massa.
					    </CardText>
					    <CardActions>
					      <FlatButton label="Action1" />
					      <FlatButton label="Action2" />
					    </CardActions>
					</Card>
				
		)
		
	}
}

export default Cards