/* eslint-disable no-undef */
require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const router = require('./routes');
const serve = require('koa-static');

app.use(
	cors({
		origin: '*'
	})
);
app.use(router.routes());

app.use(serve('./build'));

app.listen(3000);
