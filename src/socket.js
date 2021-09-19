import socketIOClient from "socket.io-client";

const Sequelize = require("sequelize-cockroachdb");

// For secure connection to CockroachDB
const fs = require("fs");

// Connect to CockroachDB through Sequelize
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "user01",
  password: "vibhu1231000",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: "26257",
  database: "caring-wolf-3587.defaultdb",
  dialectOptions: {
    ssl: {
      //For secure connection:
      ca: fs.readFileSync("../certs/root.crt").toString(),
    },
  },
  logging: false,
});

const Questions = sequelize.define("questions", {
  text: {
    type: Sequelize.TEXT,
    autoIncrement: true,
    primaryKey: true,
  },
  number: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  answers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
});

const serverEndpoint =
  "postgres://user01:vibhu1231000@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/<database>?<parameters>";

export const socket = socketIOClient(serverEndpoint, {
  transports: ["websocket"],
});
