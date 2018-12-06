/* eslint-disable no-undef */
require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const port = process.env.PORT || 3000;
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

app.listen(port);
