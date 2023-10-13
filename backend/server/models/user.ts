import {
    Sequelize,
    DataTypes
} from 'sequelize';

export interface UserAttributes {
    id ? : string;
    username ? : string;
    email ? : string;
    password ? : string;

}

export interface UserInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    id: string;
    username: string;
    email: string;
    password: string;

}

export = (sequelize: Sequelize, DataTypes: DataTypes) => {
    var User = sequelize.define('User', {
        id: DataTypes.UUID,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function(models) {
        // associations can be defined here
    };

    return User;
};
