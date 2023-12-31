'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/database.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  //@ts-ignore
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  //@ts-ignore
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    //@ts-ignore
    db[model.name] = model;
  });
  
  Object.keys(db).forEach(modelName => {
  //@ts-ignore
  if (db[modelName].associate) {
    //@ts-ignore
    db[modelName].associate(db);
  }
});

//@ts-ignore
db.sequelize = sequelize;
//@ts-ignore
db.Sequelize = Sequelize;

module.exports = db;
