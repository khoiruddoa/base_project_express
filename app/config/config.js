require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DATABASE_DEVELOPMENT_USERNAME,
    password: process.env.DATABASE_DEVELOPMENT_PASSWORD,
    database: process.env.DATABASE_DEVELOPMENT_NAME,
    host: process.env.DATABASE_DEVELOPMENT_HOST,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: process.env.DATABASE_TEST_USERNAME,
    password: process.env.DATABASE_TEST_PASSWORD,
    database: process.env.DATABASE_TEST_NAME,
    host: process.env.DATABASE_TEST_HOST,
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: process.env.DATABASE_PRODUCTION_USERNAME,
    password: process.env.DATABASE_PRODUCTION_PASSWORD,
    database: process.env.DATABASE_PRODUCTION_NAME,
    host: process.env.DATABASE_PRODUCTION_HOST,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
}