const colletion = {
  name: 'media',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection Medias',
        required: ['id_site_touristique', 'id_media'],
        properties: {
          id_site_touristique: {
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
