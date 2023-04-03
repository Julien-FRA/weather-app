const express = require("express");
const router = express.Router();
const cityCtrl = require("../controllers/city");

router.get("/add", cityCtrl.createCity);

module.exports = router;
