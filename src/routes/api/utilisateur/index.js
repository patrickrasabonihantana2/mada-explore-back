var express = require('express');
var router = express.Router();
const {ObjectId} = require('mongodb');
const Utilisateur=require('../../../models/utilisateurs/utilisateur')
const UtilisateurService = require('../../../services/utilisateur-service');
const constant = require('../../../util/constante');


router.get('/', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let utilisateur = await UtilisateurService.findAll();
    let data = {
      utilisateurs: [utilisateur]
    };
    res.send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'utilisateur inexistant';
      }
    } else {
      data.message = err.message;
    }
    res.status(400).send(data);
  }
});

router.get('/:id', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let utilisateur = await UtilisateurService.findById(id);
    let data = {
      utilisateur: utilisateur
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'utilisateur inexistant';
      }
    } else {
      data.message = err.message;
    }
    res.status(400).send(data);
  }
});

router.put('/:id', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let user = new Utilisateur(req.body.id_role,req.body.nom,req.body.prenom,req.body.login,constant.etat_update);
    let utilisateur =await UtilisateurService.update(id,user);
    let data = {
      utilisateur: user
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'utilisateur inexistant';
      }
    } else {
      data.message = err.message;
    }
    res.status(400).send(data);
  }
});

module.exports = router;
