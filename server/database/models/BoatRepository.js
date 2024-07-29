const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    // eslint-disable-next-line camelcase
    const { id, coord_x, coord_y } = boat;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      // eslint-disable-next-line camelcase
      [coord_x, coord_y, id]
    );
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
