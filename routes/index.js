/* eslint-disable no-undef */
const Router = require('koa-router');
const router = new Router({
	prefix: '/api'
});
const { doRoll } = require('../controllers');
router.get('/doroll', doRoll);

module.exports = router;
