const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit} = require("../../../controllers/boatActions");

router.get("/", browse);

router.put("/:boat", edit);

/* ************************************************************************* */

module.exports = router;
