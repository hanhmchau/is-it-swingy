import React from 'react';
import { Nav } from './Nav';
import { RollButton } from './RollButton';
import { Graph } from './Graph';

export const GraphBox = ({ roll, loading, data }) => (
	<div>
		<Nav />
		<div className="hero-body graph-container">
			<div className="graph-component">
				<Graph data={data} />
			</div>
		</div>
		<div className="hero-footer has-text-centered">
			<RollButton roll={roll} loading={loading} firstTime={false} />
		</div>
	</div>
);
