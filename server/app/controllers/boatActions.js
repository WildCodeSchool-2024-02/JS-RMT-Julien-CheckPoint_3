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
  try {
    const { id } = req.params;
    // eslint-disable-next-line camelcase
    const { coord_x, coord_y } = req.body; // Utilisation des noms originaux

    // eslint-disable-next-line camelcase
    const affectedRows = await tables.boat.update({ id, coord_x, coord_y });

    if (affectedRows === 0) {
      res.status(404).send({ error: "Boat not found" });
    } else {
      res.status(204).send(); // Réponse avec un statut 204
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
