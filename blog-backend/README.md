# Blog Project Backend - Koa
### ```const Koa = require('koa'); ```
### ```const app = new Koa();```
#
## middleware 
Koa application is composed of middelware array. 
#### `app.use` : register middleware function to application 
> #### (ctx, next) => { ... }
> ##### <li> ctx : context, save data related to web requests and reponses </li>
> ##### <li> next (optional) : caller function that calls next middleware after the current middleware. It returns Promise when it is called. The Promise next retuns completes when a next middleware finishes. </li>
#### Koa supports `async/await`. 
> ex) `app.use(async (ctx, next) => {  ... await next(); ...});`
#
## koa-router
#### `$ npm instsall koa-router --save`
#### `const Router = require('koa-router');`
#### `const router = new Router();`
GET
#### `router.get('/[pathname], ctx => { ctx.body = ' ... '; ...});`
#### `app.use(router.routes()).use(router.allowedMethods());`
#### <li>route prarmeter and query</li>
> ##### /[pathname]/:[param]
> ##### /[pathname]/:[param]? when [param] is optional 
#
## koa-bodyparser
#### `$ npm instsall koa-bodyparser --save`
#### `const bodyParser = require('koa-bodyparser);`
#### `...`
#### `app.use(bodyParser());`
#
## api controller
#### feature.ctrl.js
> To use request.body from REST api: `ctx.request.body`