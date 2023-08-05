const jwt = require('jsonwebtoken');
const MongoConnect = require('../dao/MongoConnect');
const Env = require('../util/env');
const {SiteFavoris} = require('../models/site_favoris');

class SiteFavorisService {
  /**
   * cree un nouveau site favoris
   * @param {Db} db database
   * @return {SiteFavoris}
   */
  async save(site_favoris) {
    let colletion = db.collection('siteFavoris');
    try {
      let result = await colletion.insertOne(site_favoris);
      return site;
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
      let collection = db.collection('siteFavoris');

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
   * @return {SiteFavoris[]}
   */
    static async findAll() {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('siteFavoris');
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
     * @return {SiteFavoris}
     */
    static async update(id,site) {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('siteFavoris');
          const filter = { _id:new mongodb.ObjectId(id) };
          const updateDocument = {
            $set: {
                id_site_touristique:site.id_site_touristique,
                id_user:site.id_user,
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

module.exports = SiteFavorisService;
