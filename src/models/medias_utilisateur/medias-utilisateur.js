const {Db, MongoError} = require('mongodb');

class MediasUtilisateur {
  constructor(user_id,media_id) {
    this.id_user = user_id;
    this.id_media = media_id;
  }
}

module.exports = MediasUtilisateur;
