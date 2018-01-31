// increment
export const INCREMENT_LIKES = 'INCREMENT_LIKES'

// export default function increment(index) {
// 	console.log('increment')
// 	return {
// 		type: 'INCREMENT_LIKES',
// 		index
// 	}
// }

export const increment = (index) => {
	console.log('increment in acctions', index)
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}



// // add comment
// export function addComment(postId, author, comment) {
// 	console.log("Dispatching add comment");
// 	return {
// 		type: 'ADD_COMMENT',
// 		postId,
// 		author,
// 		comment
// 	}
// }

// //remove comment
// export function removeComment(postId, i) {
// 	return {
// 	type: 'REMOVE_COMMENT',
// 	i,
// 	postId
// 	}
// }
