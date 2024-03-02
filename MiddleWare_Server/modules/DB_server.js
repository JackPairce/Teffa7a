const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const DB_server = process.env.DB_Server;

async function fetchData(col, filter = {}) {
  try {
    const data = await axios.post(`${DB_server}/system/${col}/get`, filter);
    return data.data?.[Object.keys(data.data)?.[0]];
  } catch (error) {
    console.log(error);
  }
}
async function insert(col, data) {
  try {
    const response = await axios.post(
      `${DB_server}/system/${col}/create`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @param {"register" | "login"} dir
 * @param {Object } data
 * @returns
 */
async function Auth(dir, data) {
  try {
    const response = await axios.post(`${DB_server}/auth/${dir}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  fetchData,
  insert,
  Auth,
};
