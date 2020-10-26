import pkg from 'pg';
import colors from 'colors';

const connectDB = async () => {
  const { Pool } = pkg;

  const dbUser = process.env.DB_USER;
  const dbPw = process.env.DB_PW;
  const dbHost = process.env.DB_HOST;
  const dbPort = process.env.DB_PORT;
  const dbName = process.env.DB_NAME;

  const pool = await new Pool({
    user: dbUser,
    password: dbPw,
    host: dbHost,
    port: dbPort,
    database: dbName,
  });
  pool.query('SELECT NOW()', (err, res) => {
    console.log(`Database connected at: ${JSON.stringify(res.rows)}`.green);
  });
  return pool;
};

export default connectDB;
