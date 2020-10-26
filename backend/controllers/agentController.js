import asyncHandler from 'express-async-handler';

import generateToken from '../utils/generateToken.js';

const registerUser = asyncHandler(async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('Already registered');
  } else {
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      const { _id, name, email, isAdmin } = user;
      res.status(201).json({
        _id,
        name,
        email,
        isAdmin,
        token: generateToken(_id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  }
});

export default registerUser;
