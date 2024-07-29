const TileRepository = require("../../database/models/TileRepository");

const tileRepository = new TileRepository();

const tileExists = async (req, res, next) => {
  const { coordX, coordY } = req.body;

  // Validate coordinates range
  if (coordX < 0 || coordX > 11 || coordY < 0 || coordY > 5) {
    return res.status(422).send({ message: "Invalid coordinates" });
  }

  try {
    // Check if the tile exists in the database
    const tiles = await tileRepository.readByCoordinates(coordX, coordY);

    if (tiles.length === 0) {
      return res.status(422).send({ message: "Tile not found" });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = tileExists;
