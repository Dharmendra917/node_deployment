const express = require("express");
const { home, create, readall } = require("../controllers");
const router = express.Router();

// /api/v2/
router.get("/", home);

// /api/v2/create
router.post("/create", create);

router.get("/readall", readall);

module.exports = router;
