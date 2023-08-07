const colletion = {
  name: 'medias_utilisateur',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection Medias Utilisateur',
        required: ['id_user', 'id_media'],
        properties: {
          id_user: {
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
