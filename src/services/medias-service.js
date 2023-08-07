const jwt = require('jsonwebtoken');
const MongoConnect = require('../dao/MongoConnect');
const Env = require('../util/env');
const {Medias} = require('../models/site_favoris');

class MediasService {
  /**
   * cree un nouveau site favoris
   * @param {Db} db database
   * @return {Medias}
   */
  static async save(media) {
    const mongoConnect = new MongoConnect();
    let mongoClient = undefined;
    try {
      mongoClient = await mongoConnect.getConnection();
      let db = mongoClient.db(Env.MONGO_DB);
      let collection = db.collection('medias');
      let result = await collection.insertOne(media);
      return media;
    } catch(err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * recupere un medias par l'ID
   * @param {ObjectId} id
   * @return medias
   */
  static async findById(id) {
    const mongoConnect = new MongoConnect();
    let mongoClient = undefined;
    try {
      mongoClient = await mongoConnect.getConnection();
      let db = mongoClient.db(Env.MONGO_DB);
      let collection = db.collection('medias');

      let query = {
        _id: id
      };

      let medias = await collection.find(query).toArray();
      return medias[0];
    } catch(err) {
      throw err;
    } finally {
      if(mongoClient) {
        await mongoClient.close();
      }
    }
  }

      /**
   * getall mediass
   * @return {Medias[]}
   */
    static async findAll() {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('medias');
          let result = collection.find().toArray();
          return result;
        } catch(err) {
          console.error(err);
          if(err instanceof MongoError) {
            if(err.code = 11000) {
              throw new Error('La liste des medias est vide');
            }
          }
          throw err;
        }
      }


    /**
     * met a jour un nouveau medias par son id
     * @param {String} id
     * @return {Medias}
     */
    static async update(id,medias) {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('medias');
          const filter = { _id:new mongodb.ObjectId(id) };
          const updateDocument = {
            $set: {
                id_site_touristique:medias.id_site_touristique,
                id_media:medias.id_user,
            },
          };
          const result = await collection.updateOne(filter, updateDocument);
          return result;
        } catch(err) {
          console.error(err);
          if(err instanceof MongoError) {
            if(err.code = 11000) {
              throw new Error('La liste des medias est vide');
            }
          }
          throw err;
        }
      }
}

module.exports = MediasService;
