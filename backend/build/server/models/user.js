"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: DataTypes.UUID,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};
exports.default = User;
