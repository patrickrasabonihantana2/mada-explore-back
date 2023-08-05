const jwt = require('jsonwebtoken');
const MongoConnect = require('../dao/MongoConnect');
const Env = require('../util/env');
const {Commentaire} = require('../models/site_touristique');

class CommentaireService {
  /**
   * cree un nouveau site
   * @param {Db} db database
   * @return {Commentaire}
   */
  async save(site_touristique) {
    let colletion = db.collection('Commentaire');
    try {
      // await site.login.hashMdp();
      let result = await colletion.insertOne(site_touristique);
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
      let collection = db.collection('Commentaire');

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
   * @return {Commentaire[]}
   */
    static async findAll() {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('Commentaire');
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
     * @return {Commentaire}
     */
    static async update(id,comment) {
        const mongoConnect = new MongoConnect();
        let mongoClient = undefined;
        try {
          mongoClient = await mongoConnect.getConnection();
          let db = mongoClient.db(Env.MONGO_DB);
          let collection = db.collection('Commentaire');
          const filter = { _id:new mongodb.ObjectId(id) };
          const updateDocument = {
            $set: {
              id_user:comment.id_user,
              id_parent:comment.id_parent,
              message:comment.message,
              note:comment.note,
              date_modification:comment.date_modification,
              etat:comment.etat
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

module.exports = CommentaireService;
