const express = require("express");
const database = require("./config/database");

database.connect();

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});