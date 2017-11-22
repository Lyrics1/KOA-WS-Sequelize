const Sequelize = require('sequelize');
const config = require('./config');

//创建一个sequelize对象实例
var sequelize = new Sequelize(config.database,config.username,config.password,{
	host : config.host,
	dialect : 'mysql',
	pool :{
		max:5,
		min:0,
		idle:30000
	}
})

//定义模型
const Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
        timestamps: false
    });

var  now  = Date.now();
//插入数据: Promise 方法

// Pet.create({
//     id: 'g-' + now,
//     name: 'Gaffey',
//     gender: false,
//     birth: '2007-07-07',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
// }).then(function(p){
// 	console.log("create" +JSON.stringify(p));
// }).catch(function(err){
// 	console.log('failed :',err)
// })

//使用await 插入数据
(async ()=>{
	var dog = await Pet.create({
		id: 'd-' + now,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
	});
	console.log("create" +JSON.stringify(p));

})();


//查询数据
(async()=>{
	var pets = await Pet.findAll({
		where : {
			name :"Gaffey"
		}
	});
	console.log(`findAll ${pets}`);
	for(let p of pets){
		console.log(JSON.stringify(p));

	}

	
})


