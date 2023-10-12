const { Sequelize } = require('sequelize');

module.exports = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', // Your database dialect (e.g., 'mysql', 'postgres', 'sqlite')
  // Other Sequelize configuration options
});
