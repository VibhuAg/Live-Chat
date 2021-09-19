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

Questions.sync({
    force: true,
  })
    .then(function () {
        // Insert two rows into the "accounts" table.
        return Account.bulkCreate([
            {
                text: "What is the color of the moon?",
                number: 1,
                answers: ["Blue", "Yellow"]
            },
            {
                text: "Who is the best flute player?",
                number: 2,
                answers: []
            },
        ]);
    })
    .then(function () {
      // Retrieve accounts.
      return Questions.findAll();
    })
    .then(function (questions) {
      // Print out the balances.
      questions.forEach(function (question) {
        console.log(question.number + " " + question.text);
        question.answers.forEach(function (answer) {
            console.log(answer.text)
        })
      });
      process.exit(0);
    })
    .catch(function (err) {
      console.error("error: " + err.message);
      process.exit(1);
    });