const reducer = (state = 0, action) => {
	switch(action.type) {
		case 'ADD':
			return state + 1;
		case 'REMOVE':
			return state - 1;
		case 'RANDOM':
			return state + action.value;
		default: 
			return state;
	}
}

export default reducer;
