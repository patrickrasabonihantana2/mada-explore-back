const {Db, MongoError} = require('mongodb');
const UtilisateurLogin = require('./utilisateur-login');

class SiteFavoris {
  constructor(site_id,user_id,etat) {
    this.id_site_touristique = site_id;
    this.id_user = user_id;
    this.etat = etat;
  }

}

module.exports = SiteFavoris;
