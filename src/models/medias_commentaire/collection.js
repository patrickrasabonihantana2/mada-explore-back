const colletion = {
  name: 'medias_commentaire',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection Medias Commentaire',
        required: ['id_commentaire', 'id_media'],
        properties: {
          id_commentaire: {
            bsonType: "objectId"
          },
          id_media: {
            bsonType: "objectId"
          }
        }
      }
    }
  }
}

module.exports = colletion;
