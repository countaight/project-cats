import React, { Component } from 'react';
import FadeComp from '../FadeComp';

class KingsComponent extends Component {
	render() {
		return <div>Kings Go Here!</div>
	}
}

const Kings = FadeComp(KingsComponent);
export default Kings;