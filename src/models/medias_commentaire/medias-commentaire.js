const {Db, MongoError} = require('mongodb');

class MediasCommentaire {
  constructor(comment_id,media_id) {
    this.id_commentaire = comment_id;
    this.id_media = media_id;
  }
}

module.exports = MediasCommentaire;
