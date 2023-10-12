// sequelize.ts

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost', // Use the hostname where your PostgreSQL Docker container is running
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
});

export default sequelize;
