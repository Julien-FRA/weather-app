const express = require("express");
const router = express.Router();
const cityCtrl = require("../controllers/city");

router.post("/add", cityCtrl.createCity);
router.get("/all", cityCtrl.getAllCity);

module.exports = router;
