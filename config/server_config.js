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

//set function
const add_set = require('../basic_functions/sets/add_set');
const get_all_setitems = require('../basic_functions/sets/get_all_set');
const set_len = require('../basic_functions/sets/set_len');
const data_exits = require('../basic_functions/sets/data_exits');
const remove_set = require('../basic_functions/sets/remove_set');
const union_set = require('../basic_functions/sets/set_union');
add_set();
get_all_setitems();
set_len();
data_exits();
remove_set();
union_set();

//sorted set function
const add_sorted_set = require('../basic_functions/sorted_sets/add_sorted_set');
const {get_score_sorted_set, get_sorted_set} = require('../basic_functions/sorted_sets/get_sorted_set');
const get_member_score = require('../basic_functions/sorted_sets/get_score');
const remove_sorted_set = require('../basic_functions/sorted_sets/remove_sorted_set');
const increment_score = require('../basic_functions/sorted_sets/increment_score');
const get_player_rank = require('../basic_functions/sorted_sets/get_rank');
add_sorted_set();
get_sorted_set();
get_score_sorted_set();
get_member_score();
remove_sorted_set();
increment_score();
get_player_rank();

//hash set function 
const hash_set = require('../basic_functions/hash_sets/hash_set');
const {hash_get, hash_get_all} = require('../basic_functions/hash_sets/hash_get');
const hash_len = require('../basic_functions/hash_sets/hash_len');
const check_exits = require('../basic_functions/hash_sets/hash_exits');
const get_hashkeys = require('../basic_functions/hash_sets/hash_keys');
const get_hash_value = require('../basic_functions/hash_sets/has_value');
const hash_increment_by = require('../basic_functions/hash_sets/hincr_by');
hash_set();
hash_get();
hash_get_all();
hash_len();
check_exits();
get_hashkeys();
get_hash_value();
hash_increment_by();

//pub-sub fuctions
const redis_publisher = require('../redis_pubsub/redis_publisher');
const redis_subscribe = require('../redis_pubsub/redis_subscriber');
redis_publisher();
redis_subscribe();

app.use(express.json());
app.use(cors());

module.exports = app;