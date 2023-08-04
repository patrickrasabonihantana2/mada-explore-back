const jwt = require('jsonwebtoken');
const MongoConnect = require('../dao/MongoConnect');
const Env = require('../util/env');
const {SiteTouristique} = require('../models/site_touristique');

class SiteTouristiqueService {
  /**
   * cree un nouveau site
   * @param {Db} db database
   * @return {SiteTouristique}
   */
  async save(site_touristique) {
    let colletion = db.collection('sitetouristique');
    try {
      // await this.login.hashMdp();
      let result = await colletion.insertOne(site_touristique);
      return this;
    } catch(err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * recupere un utilisateur par l'ID
   * @param {ObjectId} id
   * @return utilisateur
   */
  static async findById(id) {
    const mongoConnect = new MongoConnect();
    let mongoClient = undefined;
    try {
      mongoClient = await mongoConnect.getConnection();
      let db = mongoClient.db(Env.MONGO_DB);
      let collection = db.collection('utilisateurs');

      let query = {
        _id: id
      };

      let utilisateurs = await collection.find(query).toArray();
      return utilisateurs[0];
    } catch(err) {
      throw err;
    } finally {
      if(mongoClient) {
        await mongoClient.close();
      }
    }
  }

      /**
   * getall users
   * @return {SiteTouristique[]}
   */
    static async findAll() {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('utilisateurs');
          let result = collection.find();
          return result;
        } catch(err) {
          console.error(err);
          if(err instanceof MongoError) {
            if(err.code = 11000) {
              throw new Error('La liste des utilisateurs est vide');
            }
          }
          throw err;
        }
      }


    /**
     * met a jour un nouvel utilisateur par son id
     * @param {String} id
     * @return {Utilisateur}
     */
    static async update(id) {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('utilisateurs');
          const filter = { _id:new mongodb.ObjectId(id) };
          // update the value of the 'quantity' field to 5
          const updateDocument = {
            $set: {
                id_role:this.id_role,
                nom:this.nom,
                prenom:this.prenom,
                login:{
                  email:this.login.email,
                  mdp:this.login.mdp
                },
                preference:{
                  categorie:this.preference.categorie,
                  nom:this.preference.nom,
                  valeur:this.preference.valeur
                },
                etat:this.etat
            },
          };
          const result = await collection.updateOne(filter, updateDocument);
          return result;
        } catch(err) {
          console.error(err);
          if(err instanceof MongoError) {
            if(err.code = 11000) {
              throw new Error('La liste des utilisateurs est vide');
            }
          }
          throw err;
        }
      }
}

module.exports = UtilisateurService;
