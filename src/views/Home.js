import React, { Component } from 'react';
import Cards from '../components/Cards'
import {yellow500} from 'material-ui/styles/colors';



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
				<div className="col s12 m4">
					<Cards
						color={yellow500}
						icon='cloud_download'
						>	
					</Cards>
				</div>
				<div className="col s12 m4">
					<Cards
						color={yellow500}
						icon='graphic_eq'
					>	
					</Cards>
				</div>
				<div className="col s12 m4">
					<Cards
						color={yellow500}
						icon='location_searching'>	
					</Cards>
				</div>
			</div>
			<div className="row">
				<div className="col s12 m4">
					<Cards
						color={yellow500}
						icon='cloud_download'>	
					</Cards>
				</div>
				<div className="col s12 m4">
					<Cards
						color={yellow500}
						icon='cloud_download'>	
					</Cards>
				</div>
				<div className="col s12 m4">
					<Cards
						color={yellow500}
						icon='cloud_download'>	
					</Cards>
				</div>
			</div>
		</div>
		)
		
	}
}

export default Home