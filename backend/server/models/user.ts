import { Sequelize, Model, DataTypes, Optional } from "sequelize";

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

// We use "Optional" to mark the fields that are optional when calling UserModel.create() or UserModel.build()
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  // Timestamps created by Sequelize
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initializeUserModel(sequelize: Sequelize) {
  User.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users", // You can specify the table name here if needed
      timestamps: true, // Include timestamps (createdAt, updatedAt)
    }
  );
  // Define the associations in a separate function

  // Define any associations here, similar to the `UserModel` example you provided

  //   export function associateUserModel() {
  //       // Define associations here
  //       User.hasMany(/* Another Model */, { foreignKey: 'userId' });
  //       // Add more associations as needed
  //   }
}

export default User;
