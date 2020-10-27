// import asyncHandler from 'express-async-handler';

// // model imports
// import Agent from '../models/agentModel.js';
// // utility imports
// import generateToken from '../utils/generateToken.js';

// const registerAgent = asyncHandler(async (req, res) => {
//   const { fname, lname, phone, email, password } = req.body;
//   const agentExists = await Agent.findOne({ email });
//   if (agentExists) {
//     res.status(400);
//     throw new Error('Already registered');
//   } else {
//     const agent = await Agent.create({
//       fname,
//       lname,
//       phone,
//       email,
//       password,
//     });
//     if (agent) {
//       const { agent_id, fname, lname, phone, email, isAdmin } = agent;
//       res.status(201).json({
//         agent_id,
//         fname,
//         lname,
//         phone,
//         email,
//         isAdmin,
//         token: generateToken(agent_id),
//       });
//     } else {
//       res.status(400);
//       throw new Error('Invalid agent data');
//     }
//   }
// });

// export default registerAgent;
