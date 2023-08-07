var express = require('express');
var router = express.Router();
const {ObjectId} = require('mongodb');
const SiteFavorisService = require('../../../services/site-favoris-service');
const { SiteFavoris } = require('../../../models/site_favoris');
const constant = require('../../../util/constante');


router.post('/', async function(req, res) {
  body = req.body;
  try {
    console.log(req.body.id_site_touristique);
    let site=  new SiteFavoris(body.id_site_touristique,body.id_user,constant.etat_creer);
    let favoris= await SiteFavorisService.save(site);
    let data = {
      site_favoris: site
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
    let site_favoris = await SiteFavorisService.findAll();
    let data = {
      site_favoris: [site_favoris]
    };
    res.send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'site_favoris inexistant';
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
    let site_favoris = await SiteFavorisService.findById(id);
    let data = {
      site_favoris: site_favoris
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'site_favoris inexistant';
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
    let site = new SiteFavoris(req.body.id_site_touristique,req.body.id_user,constant.etat_update);
    let site_favoris =await SiteFavorisService.update(id,site);
    let data = {
      site_favoris: site
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'site_favoris inexistant';
      }
    } else {
      data.message = err.message;
    }
    res.status(400).send(data);
  }
});

module.exports = router;
