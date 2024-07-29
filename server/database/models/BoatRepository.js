const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.has_treasure from ${this.table} INNER JOIN tile ON tile.coord_x = boat.coord_x AND tile.coord_y = boat.coord_y`);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET coord_x=?, coord_y=? WHERE id=?`,
      [boat.coord_x, boat.coord_y, boat.id],
    )

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
