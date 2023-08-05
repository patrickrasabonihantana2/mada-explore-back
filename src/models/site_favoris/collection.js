const colletion = {
  name: 'sitefavoris',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection SiteFavoris',
        required: ['id_site_touristique', 'id_user','etat'],
        properties: {
          id_site_touristique: {
            bsonType: "objectId"
          },
          id_user: {
            bsonType: "objectId"
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
