const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `SELECT b.id, b.coord_x, b.coord_y, b.name, t.type, t.has_treasure FROM ${this.table} AS b INNER JOIN tile AS t ON b.coord_x = t.coord_x AND b.coord_y = t.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, coord_x = ?, coord_y = ? where id = ?`,
      [boat.name, boat.coord_x, boat.coord_y, boat.id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
