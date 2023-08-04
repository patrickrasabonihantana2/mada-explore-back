const colletion = {
  name: 'utilisateurs',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Collection Utilisateur',
        required: ['id_role','nom', 'prenom', 'login','preference','etat'],
        properties: {
          id_role:{
            bsonType: "objectId"
          },
          nom: {
            bsonType: "string"
          },
          prenom: {
            bsonType: "string"
          },
          login: {
            bsonType: "object",
            required: ['email', 'mdp'],
            properties: {
              email: {
                bsonType: "string"
              },
              mdp: {
                bsonType: "string"
              }
            }
          },
          preference: {
            bsonType: "object",
            required: ['categorie', 'nom','valeur'],
            properties: {
              categorie: {
                bsonType: "string"
              },
              nom: {
                bsonType: "string"
              },
              valeur: {
                bsonType: "string"
              }
            }
          },
          etat: {
            bsonType: "int"
          },
        }
      }
    }
  },
  indexes: [
    {
      indexInfo:{ "login.email": 1 },
      isUnique:true
    },
    {
      indexInfo:{ "login.email": 1, "login.mdp": 1}
    }
  ]
}

module.exports = colletion;
