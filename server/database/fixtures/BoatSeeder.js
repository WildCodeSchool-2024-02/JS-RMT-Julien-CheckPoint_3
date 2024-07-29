const AbstractSeeder = require("./AbstractSeeder");

class BoatSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "boat", truncate: true });
  }

  run() {
    const boats = [
      { name: "Black Pearl", coord_x: 1, coord_y: 1 },
      { name: "Flying Dutchman", coord_x: 4, coord_y: 5 },
      { name: "Queen Anne's Revenge", coord_x: 10, coord_y: 4 },
      { name: "The Walrus", coord_x: 9, coord_y: 0 },
    ];

    boats.forEach((boat) => {
      this.insert(boat); // insert into boat(name, coord_x, coord_y) values (?, ?, ?)
    });
  }
}

module.exports = BoatSeeder;
