// server/models/user.ts
module_user.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    id: DataTypes.UUID,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = function(models) {
  };
  return User;
};
