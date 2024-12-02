const mysql = require("mysql2");
const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');

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

const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true 

}))

const route = require('.routes/foodroutes.js')
