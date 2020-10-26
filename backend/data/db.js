import Sequelize from 'sequelize';

const connectDB = async () => {
  const dbHOST = process.env.DB_HOST;
  const dbPORT = process.env.DB_PORT;
  const dbNAME = process.env.DB_NAME;
  const dbUSER = process.env.DB_USER;
  const dbPW = process.env.DB_PW;

  try {
    const db = await new Sequelize({
      dialect: 'postgres',
      host: dbHOST,
      port: dbPORT,
      database: dbNAME,
      username: dbUSER,
      password: dbPW,
      connectTimeout: 30000,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000,
      },
    });
    db.authenticate().then(() =>
      console.log(`DB connected: ${dbNAME}`.cyan.underline)
    );
  } catch (err) {
    console.error(`ERROR: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
