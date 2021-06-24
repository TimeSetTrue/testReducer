export const add = () => ({type: 'ADD'});
export const remove = () => ({type: 'REMOVE'});
export const random = () => (
	{type: 'RANDOM', value: Math.round(Math.random() * 10)}
	);