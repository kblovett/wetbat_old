import asyncHandler from 'express-async-handler';

// model imports
import Agent from '../models/agentModel.js';
// utility imports
import generateToken from '../utils/generateToken.js';

const registerAgent = asyncHandler(async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const agentExists = await Agent.findOne({ email });
  if (agentExists) {
    res.status(400);
    throw new Error('Already registered');
  } else {
    const agent = await Agent.create({
      name,
      email,
      password,
    });
    if (agent) {
      const { _id, name, email, isAdmin } = agent;
      res.status(201).json({
        _id,
        name,
        email,
        isAdmin,
        token: generateToken(_id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid agent data');
    }
  }
});

export default registerAgent;
