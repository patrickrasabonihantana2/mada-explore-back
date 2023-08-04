var express = require('express');
var router = express.Router();
const {Utilisateur} = require('../../models/utilisateurs');
const {UtilisateurLogin} = require('../../models/utilisateurs');
const UtilisateurService = require('../../services/utilisateur-service');

/* GET users listing. */
router.post('/inscription', async function(req, res) {
  body = req.body;
  try {
    console.log(req.body.nom);
    let utilisateur = new Utilisateur(body.id_role,body.nom, body.prenom, body.login);
    utilisateur = await UtilisateurService.inscription(utilisateur);
    let data = {
      utilisateur: utilisateur
    };
    res.send(data);
  } catch(err) {
    let data = {
      message: err.message
    };
    res.status(400).send(data);
  }
});

router.post('/login', async function(req, res, next) {
  body = req.body;
  try {
    let utilsateurLogin = new UtilisateurLogin(body.email, body.mdp);
    let data = await UtilisateurService.login(utilsateurLogin);
    res.send(data);
  } catch(err) {
    let data = {
      message: err.message
    };
    res.status(400).send(data);
  }
});

module.exports = router;
