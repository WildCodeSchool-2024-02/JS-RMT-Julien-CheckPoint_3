const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");

router.get("/", browse);

// Route to edit an existing category
router.put("/:id", edit);

/* ************************************************************************* */

module.exports = router;
