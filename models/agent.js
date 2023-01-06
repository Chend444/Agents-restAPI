const Sequelize = require('sequelize');
const sequelize = require('../util/database')({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'agentai',
    dialect: 'mysql'
});

const Agent = sequelize.define('agent', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Agent;
