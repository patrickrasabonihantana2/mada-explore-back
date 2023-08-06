var express = require('express');
var router = express.Router();
const {ObjectId} = require('mongodb');
const MediasService = require('../../../services/site-favoris-service');

router.get('/', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let medias = await MediasService.findAll();
    let data = {
      medias: [medias]
    };
    res.send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'medias inexistant';
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
    let medias = await MediasService.findById(id);
    let data = {
      medias: [medias]
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'medias inexistant';
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
    let site = new medias(req.body.id_site_touristique,req.body.id_media);
    let medias =await MediasService.update(id,site);
    let data = {
      medias: [medias]
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'medias inexistant';
      }
    } else {
      data.message = err.message;
    }
    res.status(400).send(data);
  }
});

module.exports = router;
