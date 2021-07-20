var {Sequelize,DataTypes} = require('sequelize');

var sequelize = new Sequelize(process.env.mysqlDatabase,process.env.mysqlUser,process.env.mysqlPassword,{
    host:process.env.mysqlHost,
    dialect:'mysql',
    port:process.env.mysqlPort,
    pool:{
        max:10,
        min:0,
        idle:10000
    },
    define:{
        timestamps:false
    }
})
sequelize.authenticate()
.then(()=>{
    console.log('Database Connected');
})
.catch(err=>{
    console.log('error in connection of database',err);
})
var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.userData = require('./userdata')(sequelize,DataTypes);

db.sequelize.sync({force:false})
.then(()=>{
    console.log('re-sync');})
.catch(e=>{
    console.log('error',e);
})
module.exports = db;