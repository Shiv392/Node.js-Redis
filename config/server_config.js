const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

require('../redis_init');

app.use(express.json());
app.use(cors());

module.exports = app;