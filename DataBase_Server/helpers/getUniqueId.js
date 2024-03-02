const lodash = require("lodash");

const getUniqueId = async (model) => {
  console.log("start unique function...");
  let notUnique = true;
  let code;
  while (notUnique) {
    code = lodash.random(1000000, 9999999).toString();
    const doc = await model.findOne({ code });
    console.log("check if doc is unique...", doc);
    if (!doc) {
      notUnique = false;
    }
  }
  return code;
};

module.exports = {
  getUniqueId,
};
