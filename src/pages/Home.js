import React, { Component } from 'react';
import FadeComp from '../FadeComp';

class HomeComponent extends Component {
	render() {
		return <div>Home Page</div>
	}
}

const Home = FadeComp(HomeComponent);
export default Home;