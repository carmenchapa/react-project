import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux' 

// import posts from './posts'
// import comments from './comments'


function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			console.log('incrementing likes');
			//return the updated state
			const i = action.index;
			return [
			...state.slice(0,i), //before the one we are updating
			{...state[i], likes: state[i].likes + 1},
			...state.slice(i + 1), //after the one we are updating

		]
		default:
			return state;
	}
	
}

// export default posts

const rootReducer = combineReducers({posts})

export default rootReducer