import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const cardStyles = {
		padding: '20px',
		paddingTop: '10px',
		boxShadow: 'none',
		border: '1px solid #EEEEEE'
}

class WorkCards extends Component {
	
	state = {}
	render () {

		return (
		
					<Card style={cardStyles}>
										    
					    <CardMedia>
					      <img src={this.props.image}  alt={this.props.alt}  />
					    </CardMedia>
					    <CardTitle subtitle={this.props.subtitle} />
					    <CardActions>
					      <FlatButton label={this.props.action} />
					    </CardActions>
					</Card>
				
		)
		
	}
}

export default WorkCards