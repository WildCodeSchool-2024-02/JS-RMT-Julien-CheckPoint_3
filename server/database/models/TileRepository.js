const AbstractRepository = require("./AbstractRepository");

class TileRepository extends AbstractRepository {
  constructor() {
    super({ table: "tile" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all tiles from the "tile" table
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} ORDER BY coord_y, coord_x`
    );

    // Return the array of tiles
    return rows;
  }

  async getRandomIsland() {
    const [rows] = await this.database.query(
      `SELECT id FROM ${this.table} WHERE type="island" ORDER BY RAND() LIMIT 1`
    );

    return rows[0];
  }

  async hideTreasure(island) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET has_treasure =
        CASE
          WHEN id = ? THEN TRUE
          ELSE FALSE
        END`,
      [island.id]
    );

    return result;
  }

  async readByCoordinates(coordX, coordY) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE coord_x = ? AND coord_y = ?`,
      [coordX, coordY]
    );

    return rows;
  }
}

module.exports = TileRepository;
