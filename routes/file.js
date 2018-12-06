/* eslint-disable no-undef */
const Router = require('koa-router');
const router = new Router();
const send = require('koa-send');
const path = require('path');

router.get('*', async ctx => {
	await send(ctx, 'index.html', {
		root: path.join(__dirname, '../build')
	});
});

module.exports = router;
