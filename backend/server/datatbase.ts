import { Sequelize } from "sequelize";

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "postgres", // Change to your database dialect
  host: "127.0.0.1", // Change to your database host
});

import { initializeUserModel } from "./models/user";
initializeUserModel(sequelize);

sequelize.sync().then(() => {
    console.log("Database synchronized");
  }).catch((error) => {
    console.error("Database synchronization error:", error);
  });