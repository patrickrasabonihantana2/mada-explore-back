const {Db, MongoError} = require('mongodb');

class SiteTouristique {
  constructor(nom,localisation,description,types,categories,saisons,recommendations,etat) {
    this.nom = nom;
    this.localisation = localisation;
    this.description = description;
    this.types = types;
    this.categories = categories;
    this.saisons = saisons;
    this.recommendations = recommendations;
    this.photo = undefined;
    this.video=undefined;
    this.etat = etat;
  }


}

module.exports = SiteTouristique;
