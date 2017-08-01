import React, { Component } from 'react';
import Cards from '../components/Cards'


class Home extends Component {
	
	state = {}
	render () {

		return (
			
		<div className="container">
	
			<div className="row">
				<div className="col s12 m4">
					<Cards>	
					</Cards>
				</div>
				<div className="col s12 m4">
					<Cards>	
					</Cards>
				</div>
				<div className="col s12 m4">
					<Cards>	
					</Cards>
				</div>
			</div>
			<div className="row">
				<div className="col s12 m4">
					<Cards>	
					</Cards>
				</div>
				<div className="col s12 m4">
					<Cards>	
					</Cards>
				</div>
				<div className="col s12 m4">
					<Cards>	
					</Cards>
				</div>
			</div>
		</div>
		)
		
	}
}

export default Home