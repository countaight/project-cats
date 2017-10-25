import React, { Component } from 'react';

import FadeComp from '../FadeComp';

class QueensComponent extends Component {
	render() {
		return(
			<div>Queens are here!</div>
		)
	}
}

const Queens = FadeComp(QueensComponent);
export default Queens;