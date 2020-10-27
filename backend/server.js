import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

// Error Handling imports
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// DB import
import { db } from './data/db.js';

// Route imports

// db
try {
  await db
    .authenticate()
    .then(() =>
      console.log(`DB connected: ${process.env.DB_NAME}`.cyan.underline)
    );
} catch (err) {
  console.error(`ERROR: ${err.message}`.red.underline.bold);
  process.exit(1);
}

await db.drop();
await db.sync();

const app = express();

// body parser for passing json in the params body
app.use(express.json());

// API confirmation TODO: delete?
app.get('/', (req, res) => {
  res.send('API is up and running...');
});

// Routes

// config routes

// Error handling
app.use(notFound);
app.use(errorHandler);

// define PORT and MODE variables
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

// begin listening for calls
app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode on port ${PORT}`.yellow.bold)
);
