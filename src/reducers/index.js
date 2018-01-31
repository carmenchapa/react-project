import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux' 
// import { INCREMENT_LIKES } from '../actions'

// import posts from './posts'
// import comments from './comments'


function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			console.log('incrementing likes');
			console.log(action.index)
			console.log(state)
			//return the updated state
			const i = action.index;
			return Object.keys(state).map((el, index) => {
				console.log(el, index)
				return index===(action.index - 1) ?  {index: + 1} : {index }
		})
		// 	[
		// 	...state.slice(0,i), //before the one we are updating
		// 		// state
		// 	{...state[i], likes: state[i].likes + 1},
		// 	...state.slice(i + 1), //after the one we are updating

		// ]
		default:
			return state;
	}
	
}

// export default posts

const rootReducer = combineReducers({posts, routing: routerReducer})

export default rootReducer