require("dotenv").config();
const dbHost = "free-tier.gcp-us-central1.cockroachlabs.cloud";
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT || 5432;

module.exports = {
  development: {
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    port: dbPort,
    dialect: "postgres",
  },
  test: {
    username: dbUsername,
    password: dbPassword,
    database: "twitter_automator_test",
    host: dbHost,
    port: dbPort,
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    port: dbPort,
    dialect: "postgres",
  },
};
