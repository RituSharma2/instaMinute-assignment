const express = require("express");
const router = express.Router();
const scheduler = require("../controller/schedularController");

//API for scheduler
router.post("/scheduler", scheduler.triggerFunction);

module.exports = router;
