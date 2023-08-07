const {Db, MongoError} = require('mongodb');

class Commentaire {
  constructor(user_id,parent_id,message,note,date_modif,etat) {
    this.id_user = user_id;
    this.id_parent = parent_id;
    this.message = message;
    this.note = note;
    this.date_modification = date_modif;
    this.etat = etat;
  }


}

module.exports = Commentaire;
