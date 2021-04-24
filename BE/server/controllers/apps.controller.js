const useDB = require("../data/database/user");

const teams = async (req, res) => {
  const data = await useDB.getUser();
  res.status(200).send(data);
};

module.exports = { teams };
