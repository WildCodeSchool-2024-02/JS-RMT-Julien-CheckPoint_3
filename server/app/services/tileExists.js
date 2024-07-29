/* eslint-disable camelcase */
/* eslint-disable consistent-return */
const validateTile = (req, res, next) => {
  const { coord_x, coord_y } = req.body;

  if (coord_x < 0 || coord_x > 11 || coord_y < 0 || coord_y > 5) {
    return res.sendStatus(422);
  }
  next();
};

module.exports = validateTile;
