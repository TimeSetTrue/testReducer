import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({count, add, remove, random}) => {
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={add}>Add</button>
			<button onClick={remove}>Remove</button>
			<button onClick={random}>Random</button>
	  	</div>
	)
}

const mapStateToPtops = (state) => {
	return {
		count: state,
	}
}

const mapDispatchToPtops = (dispatch) => {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToPtops, mapDispatchToPtops)(Counter);