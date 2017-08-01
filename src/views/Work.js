import React, { Component } from 'react';
import WorkCards from '../components/WorkCards'

class Work extends Component {
	state = {}
	render () {
		return (

			<div className="container">
			<div className="row">
				<p className="flow-text">Work section</p>
			</div>
	
			<div className="row">
				<div className="col s12 m3">
					<WorkCards
						subtitle="subtitle1"
						action="action1"
						image="https://unsplash.it/200/200/?random"
					>	
					</WorkCards>
				</div>
				<div className="col s12 m3">
					<WorkCards
						subtitle="subtitle2"
						action="action2"
						image="https://unsplash.it/200/200/?random">	
					</WorkCards>
				</div>
				<div className="col s12 m3">
					<WorkCards
						subtitle="subtitle3"
						action="action3"
						image="https://unsplash.it/200/200/?random">	
					</WorkCards>
				</div>
				<div className="col s12 m3">
					<WorkCards
						subtitle="subtitle4"
						action="action4"
						image="https://unsplash.it/200/200/?random">	
					</WorkCards>
				</div>
			</div>
			<div className="row">
				<div className="col s12 m3">
					<WorkCards
						subtitle="subtitle5"
						action="action5"
						image="https://unsplash.it/200/200/?random">	
					</WorkCards>
				</div>
				<div className="col s12 m3">
					<WorkCards
						subtitle="subtitle6"
						action="action6"
						image="https://unsplash.it/200/200/?random">	
					</WorkCards>
				</div>
				<div className="col s12 m3">
					<WorkCards
						subtitle="subtitle7"
						action="action7"
						image="https://unsplash.it/200/200/?random">	
					</WorkCards>
				</div>
				<div className="col s12 m3">
					<WorkCards
						subtitle="subtitle8"
						action="action8"
						image="https://unsplash.it/200/200/?random">	
					</WorkCards>
				</div>
			</div>
		</div>

		)
	}
}

export default Work