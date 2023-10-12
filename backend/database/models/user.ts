import { Sequelize, DataTypes, Model } from "sequelize";

export interface UserAttributes {
  username?: string;
  email?: string;
  hashedPassword?: string;
}

export interface UserCreationAttributes extends UserAttributes {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  createdAt!: Date;
  updatedAt!: Date;

  username!: string;

  static associate(models: any) {
    // Define associations here
  }
}

export const initUser = (sequelize: Sequelize) => {
  User.init(
    {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      hashedPassword: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users", // Specify your table name if different
    }
  );
};
