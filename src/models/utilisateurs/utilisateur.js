const {Db, MongoError,ObjectId} = require('mongodb');
const UtilisateurLogin = require('./utilisateur-login');

class Utilisateur {
  constructor(role_id,nom, prenom, login = undefined,etat) {
    const objetId = new ObjectId(role_id);
    this.id_role=objetId;
    this.nom = nom;
    this.prenom = prenom;
    this.login = login ? new UtilisateurLogin(login.email, login.mdp) : undefined;
    this.preference=undefined;
    this.etat=etat;
  }

  /**
   * cree un nouvel utilisateur
   * @param {Db} db database
   * @return {Utilisateur}
   */
  async save(db) {
    let collection = db.collection('utilisateurs');
    try {
      // await this.login.hashMdp();
      let result = await collection.insertOne(this);
      return this;
    } catch(err) {
      console.error(err);
      if(err instanceof MongoError) {
        if(err.code = 11000) {
          throw new Error('email existant');
        }
      }
      throw err;
    }
  }


}

module.exports = Utilisateur;
