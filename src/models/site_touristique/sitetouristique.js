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


}

module.exports = SiteTouristique;
