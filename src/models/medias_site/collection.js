const colletion = {
  name: 'medias_site',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection Medias Site',
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
