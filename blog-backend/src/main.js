require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
// mongoose : connect server and db
import mongoose from 'mongoose';
import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
// import createFakeData from './createFakeData';

// process.env : node js 에서 환경변수 조회 
const { PORT, MONGO_URI } = process.env;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => { 
        console.log('connected to MongoDB'); 
        // createFakeData();
    })
    .catch( e => { console.log(e); });

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());
app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => { console.log('Listening to port %d', port); });


// router.get('/', ctx => {
//     ctx.body = 'Home';
// });
// router.get('/about/:name?', ctx => {
//     const { name } = ctx.params;
//     ctx.body = name ? `About ${name}` : About;
// });
// router.get('/post', ctx => {
//     const { id } = ctx.query;
//     ctx.body = id ? `post #${id}` : 'No post id';
// })

// app.use(async (ctx, next) => {
//     console.log(ctx.url);
//     console.log(1);
//     if (ctx.query.authorized !== '1'){
//         ctx.status = 401 //unauthorized
//         return;
//     }
//     await next();
//     console.log('END');
// });

// app.use((ctx, next) => {
//     console.log(2);
//     next();
// });

// app.use(ctx => {
//     ctx.body='hello world';
// });
