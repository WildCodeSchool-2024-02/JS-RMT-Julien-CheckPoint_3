const TileRepository = require("../../database/models/TileRepository");

const tileExists = async (req, res, next) => {
  const { coord_x: coordX, coord_y: coordY } = req.body;

  if (coordX < 0 || coordX > 11 || coordY < 0 || coordY > 5) {
    return res.sendStatus(422);
  }

  const tileRepo = new TileRepository(req.database);

  try {
    const tiles = await tileRepo.readByCoordinates(coordX, coordY);
    if (tiles.length > 0) {
      return next();
    }
    return res.status(404).json({ message: "Tile not found" });
  } catch (error) {
    return next(error);
  }
};

module.exports = tileExists;
