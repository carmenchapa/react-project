import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class WorkCards extends Component {
	
	state = {}
	render () {

		return (
		
					<Card>
					
					    
					    <CardMedia>
					      <img src={this.props.image} alt={this.props.alt}  />
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