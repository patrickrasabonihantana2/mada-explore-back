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
  static async save(site_touristique) {
    const mongoConnect = new MongoConnect();
    let mongoClient = undefined;
    try {
      mongoClient = await mongoConnect.getConnection();
      let db = mongoClient.db(Env.MONGO_DB);
      let collection = db.collection('sitetouristique');
      let result = await collection.insertOne(site_touristique);
      return site_touristique;
    } catch(err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * recupere un site par l'ID
   * @param {ObjectId} id
   * @return site
   */
  static async findById(id) {
    const mongoConnect = new MongoConnect();
    let mongoClient = undefined;
    try {
      mongoClient = await mongoConnect.getConnection();
      let db = mongoClient.db(Env.MONGO_DB);
      let collection = db.collection('sitetouristique');

      let query = {
        _id: id
      };

      let sites_touristiques = await collection.find(query).toArray();
      return sites_touristiques[0];
    } catch(err) {
      throw err;
    } finally {
      if(mongoClient) {
        await mongoClient.close();
      }
    }
  }

      /**
   * getall sites
   * @return {SiteTouristique[]}
   */
    static async findAll() {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('sitetouristique');
          let result = collection.find().toArray();
          return result;
        } catch(err) {
          console.error(err);
          if(err instanceof MongoError) {
            if(err.code = 11000) {
              throw new Error('La liste des sites_touristiques est vide');
            }
          }
          throw err;
        }
      }


    /**
     * met a jour un nouveau site par son id
     * @param {String} id
     * @return {SiteTouristique}
     */
    static async update(id,site) {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('sitetouristique');
          const filter = { _id: id };
          // update the value of the 'quantity' field to 5
          const updateDocument = {
            $set: {
                nom:site.nom,
                localisation:site.localisation,
                description:site.description,
                types:site.types,
                categories:site.categories,
                saisons:site.saisons,
                recommendations:site.recommendations,
                etat:site.etat
            },
          };
          const result = await collection.updateOne(filter, updateDocument);
          return result;
        } catch(err) {
          console.error(err);
          if(err instanceof MongoError) {
            if(err.code = 11000) {
              throw new Error('La liste des sites_touristiques est vide');
            }
          }
          throw err;
        }
      }
}

module.exports = SiteTouristiqueService;
