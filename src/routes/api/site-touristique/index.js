var express = require('express');
var router = express.Router();
const {ObjectId} = require('mongodb');
const SiteTouristiqueService = require('../../../services/site-touristique-service');
const { SiteTouristique } = require('../../../models/site_touristique');
const constant = require('../../../util/constante');

router.post('/', async function(req, res) {
  body = req.body;
  try {
    console.log(req.body.etat);
    let site=  new SiteTouristique(body.nom,body.localisation,body.description,body.types,body.categories,body.saisons,body.recommendations,constant.etat_creer);
    let site_touristique = await SiteTouristiqueService.save(site);
    let data = {
      site_touristique: site
    };
    res.status(200).send(data);
  } catch(err) {
    let data = {
      message: err.message
    };
    res.status(400).send(data);
  }
});


router.get('/', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let site_touristique = await SiteTouristiqueService.findAll();
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

router.get('/:id', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let site_touristique = await SiteTouristiqueService.findById(id);
    let data = {
      site_touristique: site_touristique
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
    let body=req.body;
    let site = new SiteTouristique(body.nom,body.localisation,body.description,body.types,body.categories,body.saisons,body.recommendations,constant.etat_update);
    let site_touristique =await SiteTouristiqueService.update(id,site);
    let data = {
      site_touristique: site
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

router.delete('/:id', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let body=req.body;
    let site = new SiteTouristique(body.nom,body.localisation,body.description,body.types,body.categories,body.saisons,body.recommendations,constant.etat_supprimer);
    let site_touristique =await SiteTouristiqueService.update(id,site);
    let data = {
      "message": " 1 élément supprimé"
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
