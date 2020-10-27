import { Sequelize } from 'sequelize';

// import Agent from '../models/agentModel.js';

const dbHOST = process.env.DB_HOST;
const dbPORT = process.env.DB_PORT;
const dbNAME = process.env.DB_NAME;
const dbUSER = process.env.DB_USER;
const dbPW = process.env.DB_PW;

// console.log(dbHOST, dbNAME, dbPORT, dbPW, dbUSER);

const db = new Sequelize('wetbat', 'postgres', 'djangocat', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  connectTimeout: 30000,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
  logging: console.log(),
});

export { db };
