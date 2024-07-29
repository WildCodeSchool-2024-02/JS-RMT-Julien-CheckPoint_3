const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
 const tiles = await tables.tile.readByCoordinates(req.body.coord_x, req.body.coord_y);

 if (tiles.length > 0) {
   next()
 } else {
  res.sendStatus(422)
 }
}

module.exports = (tileExists)
