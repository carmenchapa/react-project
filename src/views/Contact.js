import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

class Contact extends Component {
	state = {}
	render () {
		return (
			<div className="container">
				<div className="row">
					<p className="flow-text">Get in touch</p>
				</div>
				<div className="row">
					<div className="col s12 m1 l2"></div>
					<div className="col s12 m5 l4">
						<TextField
							hintText="your name"
							floatingLabelText="Name"
							fullWidth
						/>
					</div>
					<div className="col s12 m5 l4">
						<TextField
							hintText="youremail@email.com"
							floatingLabelText="email"
							fullWidth
						/>
					</div>
					<div className="col s12 m1 l2"></div>
				</div>
				<div className="row">
					<div className="col s12 m1 l2"></div>
					<div className="col s12 m10 l8">
						<TextField
							hintText="your messagge"
							floatingLabelText="Messagge"
							multiLine={true}
							rows={2}
							fullWidth
						/>
					</div>
					<div className="col s12 m1 l2"></div>
				</div>
				<div className="row">
					<RaisedButton label="Send" primary={true}/>
				</div>

			</div>

			)
	}
}

export default Contact