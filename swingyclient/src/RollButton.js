import React from 'react';
import * as classnames from 'classnames';

export const RollButton = ({ roll, loading, firstTime = true }) => (
	<button
		onClick={() => roll()}
		className={classnames({
			button: true,
			'is-large': true,
			'is-loading': loading
		})}
	>
		<span className="is-hidden-when-loading">
			Roll me{!firstTime && ' another'}&nbsp;
			<span className="has-text-primary">100,000</span>
			<span className="has-text-grey">d20</span>&nbsp;burritos
		</span>
	</button>
);
