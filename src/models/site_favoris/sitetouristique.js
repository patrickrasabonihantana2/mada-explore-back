const {Db, MongoError} = require('mongodb');
const UtilisateurLogin = require('./utilisateur-login');

class SiteTouristique {
  constructor(nom,localisation,description,types,categories,saisons,recommendations,medias,etat) {
    this.nom = nom;
    this.localisation = localisation;
    this.description = description;
    this.types = types;
    this.categories = categories;
    this.saisons = saisons;
    this.recommendations = recommendations;
    this.medias = medias;
    this.etat = etat;
  }

  /**
   * cree un nouveau site
   * @param {Db} db database
   * @return {SiteTouristique}
   */
  async save(db) {
    let colletion = db.collection('sitetouristique');
    try {
      // await this.login.hashMdp();
      let result = await colletion.insertOne(this);
      return this;
    } catch(err) {
      console.error(err);
      throw err;
    }
  }
  /**
   * met a jour un site touristique
   * @param {Db} db database
   * @return {SiteTouristique}
   */
  update(db) {

  }
}

module.exports = SiteTouristique;
