/* eslint-disable camelcase */
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const { coord_x, coord_y } = req.body;

  try {
    // Fetch the boat from the database
    const boat = await tables.boat.read(id);

    if (!boat) {
      return res.status(404).json({ message: "Boat not found" });
    }

    // Update the boat's coordinates
    const affectedRows = await tables.boat.update(id, {
      coord_x,
      coord_y: coordY,
    });

    // Check if the update was successful
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Boat not found" });
    }

    // Respond with a status 204 No Content
    return res.status(204).send();
  } catch (err) {
    // Pass any errors to the error-handling middleware
    return next(err);
  }
};

module.exports = {
  browse,
  edit,
};
