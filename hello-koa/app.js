//koa2导入的是Class 所以使用大写Koa

const Koa = require('koa');

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');
//创建一个Koa 对象表示web app 本身
const app = new  Koa();
app.use(bodyParser());
//请求异步处理
// 参数ctx是由koa传入的封装了request和response的变量
app.use(async(ctx,next)=>{
	
	// // 我们首先用await next();处理下一个异步函数，
	// await next();
	//   // 设置response的Content-Type:
	// ctx.response.type = 'text/html';
	//    // 设置response的内容:
	// ctx.response.body ="<h1>HELLO Koa2</h1>"
	 console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
	 await next()
})

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());

//监听端口
app.listen(3000,()=>{
	console.log("Port 3000")
});

