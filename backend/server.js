const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MySQL Connection
const con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "",
  database: "registration",
});

con.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log("Connected!");
});
