const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { add } = require("../../../controllers/gameActions");

router.post("/", add);

/* ************************************************************************* */

module.exports = router;
