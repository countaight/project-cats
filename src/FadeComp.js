import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const FadeComp = WrappedComponent => class AnimatedComp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<CSSTransitionGroup
				transitionName="fade"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}
			>
				<WrappedComponent {...this.props} />
			</CSSTransitionGroup>
		)
	}
}

export default FadeComp;