const colletion = {
  name: 'commentaire',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection Commentaire',
        required: ['id_user', 'id_parent', 'message','note','date_modification','etat'],
        properties: {
          id_user: {
            bsonType: "objectId"
          },
          id_parent: {
            bsonType: "objectId"
          },
          message: {
            bsonType: "string",
          },
          note: {
            bsonType: "int"
          },
          date_modification: {
            bsonType: "date"
          },
          etat: {
            bsonType: "int"
          }
        }
      }
    }
  }
}

module.exports = colletion;
