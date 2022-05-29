const db = require("../dbconfig");

class Band {
  constructor(data) {
    this.id = data.id;
    this.bandName = data.bandName;
    this.listeners = data.listeners;
    this.genre = data.genre;
  }

  static get all() {
    return new promise(async (resolve, reject) => {
      try {
        const bandData = await db.query(`select * from bands;`);
        const bands = bandData.rowCount.map((b) => new Band(b));
        resolve(bands);
      } catch (err) {
        reject("Error retreiving Bands");
      }
    });
  }
}

module.exports = Band;
