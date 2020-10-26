import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize();
class Agent extends Model {}

Agent.init(
  {
    agent_id: {
      type: DataTypes.UUID,
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
  {
    sequelize,
    modelName: 'Agent',
  }
);
