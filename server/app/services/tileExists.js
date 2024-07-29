const tables = require("../../database/tables"); // Assurez-vous que le chemin est correct

// Middleware pour vérifier si une tuile avec les coordonnées spécifiées existe
const tileExists = async (req, res, next) => {
  const { coordX, coordY } = req.body;

  // Vérifier si les coordonnées sont valides
  if (
    typeof coordX !== "number" ||
    typeof coordY !== "number" ||
    coordX < 0 ||
    coordX > 11 ||
    coordY < 0 ||
    coordY > 5
  ) {
    return res.sendStatus(422); // Répond avec un statut 422 si les coordonnées ne sont pas valides
  }

  try {
    // Utiliser la méthode readByCoordinates pour vérifier l'existence de la tuile
    const tiles = await tables.tile.readByCoordinates(coordX, coordY);

    if (tiles.length > 0) {
      // La tuile existe, passer au middleware suivant
      return res.next();
    }

    // La tuile n'existe pas, renvoyer une erreur 404
    return res.sendStatus(404);
  } catch (err) {
    // Gestion des erreurs
    console.error("Erreur lors de la vérification de la tuile :", err);
    return next(err); // Passer l'erreur au middleware de gestion des erreurs
  }
};

module.exports = tileExists;
