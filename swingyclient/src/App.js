import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import './App.css';
import { Hero } from './Hero';
import { roll } from './services';
import { GraphBox } from './GraphBox';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};
	}
	_starLoading() {
		this.setState({
			loading: true
		});
	}
	_accumulateChartData(newData) {
		const existingData = this.state.data || new Array(20).fill(0);
		return existingData.map((val, i) => val + newData[i]);
	}
	roll() {
		this._starLoading();
		roll(100000, 20)
			.then(results => {
				this.setState({
					loading: false,
					data: this._accumulateChartData(results)
				});
			})
			.catch(console.log);
	}
	reset() {
		this.setState({
			loading: false,
			data: undefined
		});
	}
	render() {
		return (
			<section className="bd-index-fullscreen hero is-fullheight is-light">
				{this.state.data ? (
					<GraphBox
						roll={this.roll.bind(this)}
						loading={this.state.loading}
						data={this.state.data}
					/>
				) : (
					<Hero roll={this.roll.bind(this)} loading={this.state.loading} />
				)}
			</section>
		);
	}
}

export default App;
