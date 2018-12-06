import * as request from 'request';

export const roll = (times, dice) =>
	new Promise((resolve, reject) => {
		request.get(
			'http://localhost:3000/api/doroll',
			{
				qs: {
					times,
					dice
				}
			},
			(err, response) => {
				if (err) {
					reject(err);
				} else {
					resolve(JSON.parse(response.body));
				}
			}
		);
	});
