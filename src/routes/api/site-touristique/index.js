var express = require('express');
var router = express.Router();
const {ObjectId} = require('mongodb');
const SiteTouristiqueService = require('../../../services/site-touristique-service');

router.get('/', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let site_touristique = await SiteTouristiqueService.findAll();
    let data = {
      site_touristiques: [site_touristique]
    };
    res.send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'site_touristique inexistant';
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
    let site_touristique = await SiteTouristiqueService.findById(id);
    let data = {
      site_touristiques: [site_touristique]
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'site_touristique inexistant';
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
    let site = new site_touristique(req.body.id_role,req.body.nom,req.body.prenom,req.body.login,req.body.etat);
    let site_touristique =await SiteTouristiqueService.update(id,site);
    let data = {
      site_touristiques: [site_touristique]
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'site_touristique inexistant';
      }
    } else {
      data.message = err.message;
    }
    res.status(400).send(data);
  }
});

module.exports = router;
