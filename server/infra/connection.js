require("dotenv").config(
  {
    path: "../../.env"
  }
);
const pg = require("pg-promise")();
const bd = pg({
  user:'postgres',
  password:'utyf8o67rsdv',
  host:'database-aws.cniwqo5rj0nm.sa-east-1.rds.amazonaws.com',
  port:'5432',
  database:'databaseasw',
});

module.exports = bd;
