const dotenv = require("dotenv");
const connectDb = require("./database/connectDb");

dotenv.config();

const server = require("./app");

//============================================================

const myServer = () => {
  server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

connectDb(process.env.MONGO_URL, myServer);
