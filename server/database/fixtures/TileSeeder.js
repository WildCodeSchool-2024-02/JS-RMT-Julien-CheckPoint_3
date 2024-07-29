const AbstractSeeder = require("./AbstractSeeder");

class TileSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "tile", truncate: true });
  }

  run() {
    const tiles = [
      { type: "sea", coord_x: 0, coord_y: 0 },
      { type: "sea", coord_x: 1, coord_y: 0 },
      { type: "sea", coord_x: 2, coord_y: 0 },
      { type: "sea", coord_x: 3, coord_y: 0 },
      { type: "sea", coord_x: 4, coord_y: 0 },
      { type: "island", coord_x: 5, coord_y: 0 },
      { type: "sea", coord_x: 6, coord_y: 0 },
      { type: "sea", coord_x: 7, coord_y: 0 },
      { type: "sea", coord_x: 8, coord_y: 0 },
      { type: "port", coord_x: 9, coord_y: 0 },
      { type: "sea", coord_x: 10, coord_y: 0 },
      { type: "sea", coord_x: 11, coord_y: 0 },
      { type: "sea", coord_x: 0, coord_y: 1 },
      { type: "port", coord_x: 1, coord_y: 1 },
      { type: "sea", coord_x: 2, coord_y: 1 },
      { type: "island", coord_x: 3, coord_y: 1 },
      { type: "sea", coord_x: 4, coord_y: 1 },
      { type: "sea", coord_x: 5, coord_y: 1 },
      { type: "sea", coord_x: 6, coord_y: 1 },
      { type: "sea", coord_x: 7, coord_y: 1 },
      { type: "sea", coord_x: 8, coord_y: 1 },
      { type: "sea", coord_x: 9, coord_y: 1 },
      { type: "island", coord_x: 10, coord_y: 1 },
      { type: "sea", coord_x: 11, coord_y: 1 },
      { type: "sea", coord_x: 0, coord_y: 2 },
      { type: "sea", coord_x: 1, coord_y: 2 },
      { type: "sea", coord_x: 2, coord_y: 2 },
      { type: "sea", coord_x: 3, coord_y: 2 },
      { type: "sea", coord_x: 4, coord_y: 2 },
      { type: "sea", coord_x: 5, coord_y: 2 },
      { type: "sea", coord_x: 6, coord_y: 2 },
      { type: "sea", coord_x: 7, coord_y: 2 },
      { type: "island", coord_x: 8, coord_y: 2 },
      { type: "sea", coord_x: 9, coord_y: 2 },
      { type: "sea", coord_x: 10, coord_y: 2 },
      { type: "sea", coord_x: 11, coord_y: 2 },
      { type: "sea", coord_x: 0, coord_y: 3 },
      { type: "island", coord_x: 1, coord_y: 3 },
      { type: "sea", coord_x: 2, coord_y: 3 },
      { type: "sea", coord_x: 3, coord_y: 3 },
      { type: "island", coord_x: 4, coord_y: 3 },
      { type: "sea", coord_x: 5, coord_y: 3 },
      { type: "sea", coord_x: 6, coord_y: 3 },
      { type: "sea", coord_x: 7, coord_y: 3 },
      { type: "sea", coord_x: 8, coord_y: 3 },
      { type: "sea", coord_x: 9, coord_y: 3 },
      { type: "sea", coord_x: 10, coord_y: 3 },
      { type: "sea", coord_x: 11, coord_y: 3 },
      { type: "sea", coord_x: 0, coord_y: 4 },
      { type: "sea", coord_x: 1, coord_y: 4 },
      { type: "sea", coord_x: 2, coord_y: 4 },
      { type: "sea", coord_x: 3, coord_y: 4 },
      { type: "sea", coord_x: 4, coord_y: 4 },
      { type: "sea", coord_x: 5, coord_y: 4 },
      { type: "sea", coord_x: 6, coord_y: 4 },
      { type: "island", coord_x: 7, coord_y: 4 },
      { type: "sea", coord_x: 8, coord_y: 4 },
      { type: "sea", coord_x: 9, coord_y: 4 },
      { type: "port", coord_x: 10, coord_y: 4 },
      { type: "sea", coord_x: 11, coord_y: 4 },
      { type: "island", coord_x: 0, coord_y: 5 },
      { type: "sea", coord_x: 1, coord_y: 5 },
      { type: "sea", coord_x: 2, coord_y: 5 },
      { type: "sea", coord_x: 3, coord_y: 5 },
      { type: "port", coord_x: 4, coord_y: 5 },
      { type: "sea", coord_x: 5, coord_y: 5 },
      { type: "sea", coord_x: 6, coord_y: 5 },
      { type: "sea", coord_x: 7, coord_y: 5 },
      { type: "sea", coord_x: 8, coord_y: 5 },
      { type: "sea", coord_x: 9, coord_y: 5 },
      { type: "sea", coord_x: 10, coord_y: 5 },
      { type: "island", coord_x: 11, coord_y: 5 },
    ];

    tiles.forEach((tile) => {
      this.insert(tile); // insert into tile(type, coord_x, coord_y) values (?, ?, ?)
    });
  }
}

module.exports = TileSeeder;
