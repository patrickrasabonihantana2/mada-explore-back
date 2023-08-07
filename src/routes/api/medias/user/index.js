var express = require('express');
var router = express.Router();
const {ObjectId} = require('mongodb');
const MediasUtilisateurService = require('../../../../services/medias-user-service ');
const { MediasUtilisateur } = require('../../../../models/medias_utilisateur');




router.post('/', async function(req, res) {
  body = req.body;
  try {
    let site=  new MediasUtilisateur(body.id_user,body.id_media);
    let media= await MediasUtilisateurService.save(site);
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
    let medias = await MediasUtilisateurService.findAll();
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
    let medias = await MediasUtilisateurService.findById(id);
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
    let site = new MediasUtilisateur(req.body.id_site_touristique,req.body.id_media);
    let medias =await MediasUtilisateurService.update(id,site);
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
