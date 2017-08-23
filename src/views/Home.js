import React, { Component } from 'react';
import Cards from '../components/Cards'
import {yellow500} from 'material-ui/styles/colors';

import data from '../data/about.json'



class Home extends Component {
	
	state = {}
	render () {

		return (
			
		<div className="container">
			<div className="row">
			<div className="col s12 m2"></div>
			<div className="col s12 m8"><p className="flow-text">Home</p></div>
			<div className="col s12 m2"></div>
			</div>
			<div className="row">
					<Cards
						
						color={yellow500}
						>	
					</Cards>
				
			</div>
		</div>
		)
		
	}
}

export default Home