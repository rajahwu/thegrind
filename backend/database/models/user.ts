import {
    Sequelize,
    DataTypes
} from 'sequelize';

export interface UserAttributes {
    username ? : string;

}

export interface UserInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    username: string;

}

export = (sequelize: Sequelize, DataTypes: DataTypes) => {
    var User = sequelize.define('User', {
        username: DataTypes.STRING
    });

    User.associate = function(models) {
        // associations can be defined here
    };

    return User;
};
