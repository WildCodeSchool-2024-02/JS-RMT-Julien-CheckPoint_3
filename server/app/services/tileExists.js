const TileRepository = require("../../database/models/TileRepository");

const tileExists = async (req, res, next) => {
  const tileRepository = new TileRepository();
  const tiles = await tileRepository.readByCoordinates(
    req.body.coord_x,
    req.body.coord_y
  );
  if (tiles.length > 0) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
