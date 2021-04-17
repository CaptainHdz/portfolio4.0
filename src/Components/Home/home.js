import React, { Component } from 'react';
import './style.css';
import Particles from 'react-particles-js';
import JSON from '../../particlesjs-config (1).json';

class Home extends Component {
	state = {
		sentence1: 'Building The Future.',
		sentence2: ' One Line Of Code At A Time.',
	};

	componentDidMount() {}

	onClickDownArrow = () => {
		const about = document.getElementById('about');
		about.scrollIntoView({ behavior: 'smooth' });
	};

	render() {
		return (
			<div id='home' data-aos='zoom-in' data-aos-duration='1200'>
				<Particles className='canvas-wrapper' canvasClassName='particles' params={JSON} />
				<h1 id='headline'>
					<span id='sentence1'>{this.state.sentence1}</span>
					<span id='sentence2'>{this.state.sentence2}</span>
				</h1>
				<i
					id='down-arrow'
					className='material-icons large white-text'
					onClick={this.onClickDownArrow}
				>
					keyboard_arrow_down
				</i>
			</div>
		);
	}
}

export default Home;
