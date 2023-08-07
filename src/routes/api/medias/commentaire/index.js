var express = require('express');
var router = express.Router();
const {ObjectId} = require('mongodb');
const MediasCommentaireService = require('../../../../services/medias-user-service');
const { MediasCommentaire } = require('../../../../models/medias_commentaire');




router.post('/', async function(req, res) {
  body = req.body;
  try {
    let site=  new MediasCommentaire(body.id_commentaire,body.id_media);
    let media= await MediasCommentaireService.save(site);
    let data = {
      medias: site
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
    let medias = await MediasCommentaireService.findAll();
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
    let medias = await MediasCommentaireService.findById(id);
    let data = {
      medias: medias
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
    let site = new MediasCommentaire(req.body.id_site_touristique,req.body.id_media);
    let medias =await MediasCommentaireService.update(id,site);
    let data = {
      medias: site
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
