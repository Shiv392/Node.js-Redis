const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

require('../redis_init');

// string function 
const redis_set = require('../basic_functions/strings/redis_set');
const redis_get = require('../basic_functions/strings/redis_get');
redis_set();
redis_get();

// list function 
const {front_add_list, end_add_list} = require('../basic_functions/lists/add_list');
const get_list = require('../basic_functions/lists/get_list');
const {left_pop, right_pop} = require('../basic_functions/lists/pop_list');
const list_length = require('../basic_functions/lists/list_length');
const list_itemby_index = require('../basic_functions/lists/list_index');
// front_add_list();
// end_add_list();
get_list();
left_pop();
right_pop();
list_length();
list_itemby_index();

app.use(express.json());
app.use(cors());

module.exports = app;