const Sequelize = require('sequelize');

module.exports = (options) => {
    const sequelize = new Sequelize(options);
    return sequelize;
};
