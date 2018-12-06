const axios = require('axios');

const _getRequestBody = (times, dice) => {
	const body = JSON.parse(process.env.REQUEST_BODY);
	body.rolls[0].vre.rolls[0].dice = times;
	body.rolls[0].vre.rolls[0].sides = dice;
	return body;
};

const _getTriedTimes = times => {
	const triedTimes = [];
	const div = times / 999;
	const leftover = times % 999;
	for (let i = 0; i <= div + 1; i++) {
		// + 1 for safety measure
		triedTimes.push(999);
	}
	triedTimes.push(leftover);
	return triedTimes;
};

const _getRollFromResponse = response => {
	const data = response.data;
	let cleanedData = {};
	for (const key in data) {
		cleanedData = data[key];
		break;
	}
	const rolls = JSON.parse(cleanedData.json).rolls[0].results;
	return rolls.map(roll => roll.v);
};

const _rollDices = (times, dice) => {
	return axios
		.post('https://app.roll20.net/doroll', _getRequestBody(times, dice))
		.then(
			response =>
				new Promise(resolve => {
					resolve(_getRollFromResponse(response));
				})
		)
		.catch(error => {});
};

const _parseResults = (times, dice, results) => {
	const tally = new Array(parseInt(dice)).fill(0);
	let count = 0;
	results.forEach(res => {
		res.forEach(val => {
			if (count < times) {
				tally[val - 1]++;
			}
			count++;
		});
	});
	return tally;
};

module.exports.rollDice = async (times, dice) => {
	const triedTimes = _getTriedTimes(times);
	const result = await Promise.all(triedTimes.map(t => _rollDices(t, dice)));
	return _parseResults(times, dice, result);
};
