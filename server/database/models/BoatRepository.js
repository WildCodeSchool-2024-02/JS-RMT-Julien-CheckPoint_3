const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table} JOIN tile ON ${this.table}.coord_x=tile.coord_x and ${this.table}.coord_y=tile.coord_y
    `);

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
