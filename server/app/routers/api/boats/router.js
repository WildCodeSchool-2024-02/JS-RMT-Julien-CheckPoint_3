const express = require("express");
const tileExist = require("../../../services/tileExists");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/boatActions");

router.get("/", browse);

const { edit } = require("../../../controllers/boatActions");

router.put("/:id", tileExist, edit);
/* ************************************************************************* */

module.exports = router;
