import pkg from 'sequelize';
const { DataTypes } = pkg;

import { db } from '../data/db.js';

// const sequelize = new Sequelize('postgres::memory');

const Agent = db.define(
  'Agent',
  {
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
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
  { tableName: 'agents' }
);

console.log(Agent === sequelize.models.Agent);

export default Agent;
