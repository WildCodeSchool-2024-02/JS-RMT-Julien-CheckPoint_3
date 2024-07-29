/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update({ id, coord_x, coord_y }) {
    try {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET coordX = ?, coordY = ? WHERE id = ?`,
        [coord_x, coord_y, id]
      );
      /* eslint-disable no-console */


console.log(result);
/* eslint-enable no-console */
      return result.affectedRows;
    } catch (error) {
      throw new Error(`Update failed: ${error.message}`);
    }
  }
}

module.exports = BoatRepository;
