require("dotenv").config(
  {
    path: "../../.env"
  }
);
const pg = require("pg-promise")();
const bd = pg({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'utyf8o67rsdv',
  host: process.env.DB_HOST || 'database-aws.cniwqo5rj0nm.sa-east-1.rds.amazonaws.com',
  port: process.env.DB_PORT || '5432',
  database: process.env.DB_NAME || 'databaseasw',
});

module.exports = bd;
