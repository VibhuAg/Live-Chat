// For secure connection to CockroachDB
const fs = require("fs");

const Sequelize = require("sequelize-cockroachdb");
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
      ca: fs.readFileSync("./certs/root.crt").toString(),
    },
  },
  logging: false,
});

module.exports.Questions = sequelize.define("questions", {
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

module.exports.questionToJSON = function (question) {
  return {
    text: question.text,
    number: question.number,
    answers: question.answers,
  };
};

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;

// Questions.sync({
//   force: true,
// })
//   .then(function () {
//     // Insert two rows into the "accounts" table.
//     return Questions.bulkCreate([
//       {
//         text: "What is the color of the moon?",
//         number: 1,
//         answers: ["Blue", "Yellow"],
//       },
//       {
//         text: "Who is the best flute player?",
//         number: 2,
//         answers: [],
//       },
//     ]);
//   })
//   .then(function () {
//     // Retrieve accounts.
//     return Questions.findAll();
//   })
//   .then(function (questions) {
//     // Print out the balances.
//     questions.forEach(function (question) {
//       console.log(question.number + " " + question.text);
//       question.answers.forEach(function (answer) {
//         console.log(answer);
//       });
//     });
//     process.exit(0);
//   })
//   .catch(function (err) {
//     console.error("error: " + err.message);
//     process.exit(1);
//   });
