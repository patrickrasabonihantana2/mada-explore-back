const colletion = {
  name: 'sitetouristique',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection SiteTouristique',
        required: ['nom', 'localisation', 'description','types','categories','saisons','recommendations','etat'],
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
          etat: {
            bsonType: "int"
          }
        }
      }
    }
  },
  indexes: [
    {
      indexInfo:{ "types": 1 },
    },
    {
      indexInfo:{ "categories": 1}
    },    {
      indexInfo:{ "types": 1, "categories": 1}
    }
  ]
}

module.exports = colletion;
