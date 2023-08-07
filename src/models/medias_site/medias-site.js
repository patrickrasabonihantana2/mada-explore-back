const {Db, MongoError} = require('mongodb');

class MediasSite {
  constructor(site_id,media_id) {
    this.id_site_touristique = site_id;
    this.id_media = media_id;
  }
}

module.exports = MediasSite;
