import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux' 
// import { INCREMENT_LIKES } from '../actions'


function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			const i = action.index;
			if (state.cards) {
				return state.cards.map((el, index) => {
					return index===(action.index - 1) ?  {index: 1} : {index: 0 }
				})
			}else{
				return state.map((el, index) => {
					return index===(action.index - 1) ?  {index: state[index].index + 1} : el
				})
			}
		default:
			return state;
	}
	
}

const rootReducer = combineReducers({posts, routing: routerReducer})

export default rootReducer