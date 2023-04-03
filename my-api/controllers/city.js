const City = require("../models/City");

exports.createCity = (req, res, next) => {
  const city = new City({
    ...req.body,
  });
  city
    .save()
    .then(() =>
      res.status(201).json({
        message: "Objet enregistré !",
      })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllCity = (req, res, next) => {
  City.find()
    .then((cities) => res.status(200).json(cities))
    .catch((error) => res.status(400).json({ error }));
};
