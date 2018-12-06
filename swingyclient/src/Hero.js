import React from 'react';
import { RollButton } from './RollButton';

export const Hero = ({ roll, loading }) => (
	<div className="hero-body">
		<div className="container has-text-centered is-size-4">
			<header className="bd-index-header">
				<h3 className="title is-3">
					Is&nbsp;
					<a href="https://roll20.net" className="has-text-primary">
						Roll20
					</a>
					&nbsp;swingy?
				</h3>
				<h6 className="subtitle is-6">
					We know it's not the VTT system we deserve. But is it swingy on top of
					that?
				</h6>
			</header>
			<RollButton roll={roll} loading={loading} />
		</div>
	</div>
);
