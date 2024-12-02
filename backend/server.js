const mysql = require("mysql2");
const express = require("express");
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

require('dotenv').config();