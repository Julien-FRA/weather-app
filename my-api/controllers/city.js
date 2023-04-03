const City = require("../models/City");

exports.createCity = (req, res, next) => {
  res.send("Création de la villle");
  const city = new City({
    ...req.body,
  });
};
