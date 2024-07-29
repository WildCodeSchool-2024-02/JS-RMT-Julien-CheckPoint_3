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
  const boatId = req.params.id;

  try {
    const affectedRows = await tables.boat.update({
      id: boatId,
      coord_x:req.body.coord_x,
      coord_y:req.body.coord_y,
    });

    if (affectedRows === 0) {
      return res.status(404).send({ message: "Boat not found" });
    }

    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  browse,
  edit,
};
