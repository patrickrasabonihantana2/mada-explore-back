const colletion = {
  name: 'sitetouristique',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection SiteTouristique',
        required: ['nom', 'localisation', 'description','types','categories','saisons','recommendations','medias','etat'],
        properties: {
          nom: {
            bsonType: "string"
          },
          localisation: {
            bsonType: "string"
          },
          description: {
            bsonType: "string",
          },
          types: {
            bsonType: "string"
          },
          categories: {
            bsonType: "string"
          },
          saisons: {
            bsonType: "string"
          },
          recommendations: {
            bsonType: "string"
          },
          medias: {
            bsonType: "string"
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
