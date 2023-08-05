const colletion = {
  name: 'commentaire',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection Commentaire',
        required: ['id_user', 'id_parent', 'message','photo','video','note','date_modification','etat'],
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
          photo: {
            bsonType: "object",
            required: ['nom', 'stockage'],
            properties: {
              nom: {
                bsonType: "string"
              },
              stockage: {
                bsonType: "binData"
              }
            }
          },
          video: {
            bsonType: "object",
            required: ['nom', 'stockage'],
            properties: {
              nom: {
                bsonType: "string"
              },
              stockage: {
                bsonType: "binData"
              }
            }
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
