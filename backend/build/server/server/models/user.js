"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeUserModel = void 0;
var sequelize_1 = require("sequelize");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(sequelize_1.Model));
function initializeUserModel(sequelize) {
    User.init({
        id: {
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize: sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true, // Include timestamps (createdAt, updatedAt)
    });
    // Define the associations in a separate function
    // Define any associations here, similar to the `UserModel` example you provided
    //   export function associateUserModel() {
    //       // Define associations here
    //       User.hasMany(/* Another Model */, { foreignKey: 'userId' });
    //       // Add more associations as needed
    //   }
}
exports.initializeUserModel = initializeUserModel;
exports.default = User;
