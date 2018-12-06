/* eslint-disable no-undef */
require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const port = process.env.PORT || 3000;
const cors = require('@koa/cors');
const router = require('./routes');
const mount = require('koa-mount');
const serve = require('koa-static');
const path = require('path');

app.use(
	cors({
		origin: '*'
	})
);

app.use(router.routes());

const render = serve(path.join(__dirname, '/build'));
app.use(mount(render));

app.listen(port);
