const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`
      SELECT 
        b.id,
        b.name,
        b.coord_x,
        b.coord_y,
        tile.type,
        tile.has_treasure
      FROM 
        ${this.table} AS b
      INNER JOIN 
        tile ON b.coord_x = tile.coord_x AND b.coord_y = tile.coord_y
    `);
    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const query = `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`;
    const [result] = await this.database.execute(query, [
      boat.coord_x,
      boat.coord_y,
      boat.id,
    ]);
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
