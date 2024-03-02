const mongoose = require("mongoose");

const connectDb = (url, server) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // auth: {
      //   username: 'admin',
      //   password: 'password'
      // }
    })
    .then(async () => {
      console.info("Database connected");
    })
    .then(() => {
      server();
    })
    .catch((error) => {
      console.error("database connection error");
      console.error(error.message);
    });
};

module.exports = connectDb;
