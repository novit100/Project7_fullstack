 const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors=require('cors');

app.use(cors());
app.use(express.json());


// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DaphnaAura19",
  database: "fullStackFinalDB" // Replace "your_database_name" with the actual name of your database

});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ', error);
  } else {
    console.log('Connected to the database');
  }
});