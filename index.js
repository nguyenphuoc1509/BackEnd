const express = require("express");
require("dotenv").config();
const database = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");

database.connect();

const app = express();
const port = process.env.PORT;


app.use(cors());

// parse application/json
app.use(bodyParser.json());

//API Routes


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});