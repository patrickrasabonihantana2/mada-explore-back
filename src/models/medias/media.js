const {Db, MongoError} = require('mongodb');

class Media {
  constructor(site_id,media_id,etat) {
    this.id_site_touristique = site_id;
    this.id_media = media_id;
  }
}

module.exports = SiteFavoris;
