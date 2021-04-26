const express = require('express');
const cors = require('cors');
require('./config/dbConnect');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/todo', require('./routers/todoRouter'));

module.exports = app.listen(4000, () => console.log('Server up and running!'));
