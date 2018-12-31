require('dotenv').config();
const path = require('path')
const Koa = require('koa');

const Webpack = require('webpack');
const koaWebpack = require('koa-webpack');
const Router = require('koa-router');
// const graphqlHTTP = require('koa-graphql');

// const KoaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const jwtKoa = require('koa-jwt');
// const session = require('koa-session');

const server = require('./apollo-server');
const config = require('../configs/webpack.config');


// const Schemas = require('./schemas')
const app = new Koa();
const compiler = Webpack(config);

// // 加载 graphQL

koaWebpack({ compiler })
    .then((middleware) => {
        const router = new Router();
        app.use(middleware);
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                if (err.statusCode === 401) {
                    ctx.redirect('/login');
                }
            }
        });

        app.use(jwtKoa({
            secret: process.env.JWT_SECRET,
            passthrough: true,
            cookie: 'user',
        }));//.unless({ path: [/^\/login/] }));
        app.use(bodyParser());
        // 单页
        router.get('/', (ctx) => {
            const filename = path.resolve(config.output.path, './dist/index.html')
            ctx.response.type = 'html'
            ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)
        });
        router.get('/login', ctx => {
            const filename = path.resolve(config.output.path, './dist/login.html')
            ctx.response.type = 'html'
            ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)
        })
        // router.post('/api/login', (ctx, next) => {
        //     const { username, password } = ctx.request.body;

        //     next();
        // })
        // router.use(auth.validate);
        server.applyMiddleware({ app });
        app.use(router.routes()).use(router.allowedMethods());
        app.listen(3000, () =>
            console.log(`🚀 Server ready at http://localhost:3000`),
        );
    });