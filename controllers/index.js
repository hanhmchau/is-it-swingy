const { rollDice } = require('../services');

module.exports.doRoll = async ctx => {
	const { times = 1, dice = 20 } = { ...ctx.query };
	ctx.body = await rollDice(times, dice);
};
