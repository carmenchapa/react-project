import React from 'react'

// import FontIcon from 'material-ui/FontIcon';
// import IconButton from 'material-ui/IconButton';

import Favorite from 'material-ui/svg-icons/action/favorite';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

import { increment } from '../actions'



const iconButtonStyles = {
	paddingLeft: '0',
	paddingRight: '0',
	textAlign: 'left',
    // top: '6px',
    // width: '30px',
    // height: '30px',
    // fontSize: '1rem'
}

// const tooltipStyles = {
// 	left: '-4px',
// }



const divStyle = {
	marginLeft: '2px'
}
// const  clickButton = (i) => { 
// 	console.log('clicked!', i) 
// 	increment(null, i)
// } 


// onClick={this.props.onClick}
class LikeIconButton extends React.Component {
	constructor(props) {
		super(props);
		this.color="grey"
		this.hoverColor="#ef9a9a"
		
	  }
	  render() {
		const { post, i } = this.props;
		//  clickButton = (i) => { 
		// 	console.log('clicked!', i) 
		// 	increment(null, i)
		// } 
	
		const likesStyle = {
			marginRight: '3px',
			color: this.color
		}
		return (

			<div style={divStyle} onClick={() => this.props.increment(this.props.i)}>
			<span style={likesStyle}>0</span>
			{/*<IconButton 
			  
			  tooltip="like"
			  tooltipPosition="bottom-center"
			  tooltipStyles={tooltipStyles}
			  style={iconButtonStyles}
			  disableTouchRipple={true}
			>*/}
				<Favorite 
				color={this.color} 
				hoverColor="#ef9a9a"
				style={iconButtonStyles}
			  />
			   {/*</IconButton>*/}
			
		  
		  </div>
		  )

	  }

}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		// comments: state.comments
	}
}


function mapDispatchToProps(dispatch) {
	return  bindActionCreators (actions, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(LikeIconButton)


// export default LikeIconButton