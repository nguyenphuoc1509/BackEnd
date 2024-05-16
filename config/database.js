const mongoose = require("mongoose");

module.exports.connect = () => {
  mongoose.connect("mongodb://localhost:27017/diamond-shop-system")
    .then(() => console.log('Connected!'));
}