const express = require("express");
const { getAllLoatery, updateLoadtery } = require("../controllers/loateryController");
const router = express.Router();


router.get("/get-all-lotery", getAllLoatery);
router.post("/update-lotery", updateLoadtery);



module.exports = router;