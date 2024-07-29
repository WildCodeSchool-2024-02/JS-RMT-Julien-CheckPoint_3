const tileExists = async (req, res, next) => {
  if (req.body.coord_x <= 11 && req.body.coord_y <=5) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
