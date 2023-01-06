const Sequelize = require('sequelize');
const sequelize = require('../util/database')({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'agentai',
    dialect: 'mysql'
});

const Locations = sequelize.define('locations', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});


module.exports = Locations;
