const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    if (where == null) {
      const [rows] = await this.database.query(
        `select b.id, b.coord_x, b.coord_y, b.name, t.type, t.has_treasure FROM ${this.table} AS b JOIN tile AS t ON b.coord_x=t.coord_x AND b.coord_y=t.coord_y`
      );
      // Return the array of boats
      return rows;
    }
    const [rows] = await this.database.query(
      `select b.id, b.coord_x, b.coord_y, b.name, t.type, t.has_treasure FROM ${this.table} AS b JOIN tile AS t ON b.coord_x=t.coord_x AND b.coord_y=t.coord_y WHERE b.name = ?`,
      [where.name]
    );
    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [editedBoat] = await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? where id=?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );

    return editedBoat.affectedRows;
  }
}

module.exports = BoatRepository;
