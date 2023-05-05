import express from "express"
const mysql = require("mysql")
const cors = require("cors");

const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12615682',
    password: 'iZcTdrx8Ap',
    database: 'sql12615682'
  });