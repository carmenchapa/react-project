import React from 'react'

import Favorite from 'material-ui/svg-icons/action/favorite';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { increment } from '../actions'


const iconButtonStyles = {
	paddingLeft: '0',
	paddingRight: '0',
	textAlign: 'left',
}

const divStyle = {
	marginLeft: '2px'
}


class LikeIconButton extends React.Component {
	constructor(props) {
		super(props);
		this.color="grey"
		this.hoverColor="#ef9a9a"
	  }
	  render() {
		const { post, i } = this.props;
	
		const likesStyle = {
			marginRight: '3px',
			color: this.color
		}
		return (
			<div style={divStyle} onClick={() => this.props.increment(this.props.i)}>
			<span style={likesStyle}>{this.props.posts[this.props.i - 1] ? this.props.posts[this.props.i - 1].index : 0}</span>
				<Favorite 
				color={this.color} 
				hoverColor="#ef9a9a"
				style={iconButtonStyles}
			  />
		  </div>
		  )
	  }
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
	}
}

function mapDispatchToProps(dispatch) {
	return  bindActionCreators (actions, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(LikeIconButton)
