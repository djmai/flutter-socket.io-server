const Band = require("./band");


class Bands {

  constructor() {
    this.bands = [];
  }

  addBand(band = new Band()) {
    this.bands.push(band)
  }

  getBands() {
    return this.bands
  }

  deleteBand(id = '') {
    this.bands = this.bands.filter(band => id !== band.id)
    return this.bands
  }

  voteBand(id = '') {
    this.bands = this.bands.map(band => {
      if (id === band.id) {
        band.votes++
        return band
      }else{
        return band
      }
    })
  }
}

module.exports = Bands