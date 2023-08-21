const DbConfig = require("../config/DbConfig.js");
const { DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize(
    DbConfig.DB,
    DbConfig.USER,
    DbConfig.PASSWORD,
    {
        host: DbConfig.HOST,
        dialect: DbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: DbConfig.pool.max,
            min: DbConfig.pool.min,
            acquire: DbConfig.pool.acquire,
            idle: DbConfig.pool.idle,
        }
    }
)

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
})
.catch(error => {
    console.error("Unable to connect to the database:", error);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tb_mahasiswa = require('./MahasiswaModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
})

module.exports = db