var express = require('express');
var router = express.Router();
const {ObjectId} = require('mongodb');
const CommentaireService = require('../../../services/commentaire-favoris-service');

router.get('/', async function(req, res) {
  try {
    let id = new ObjectId(req.params.id);
    let commentaire = await CommentaireService.findAll();
    let data = {
      commentaire: [commentaire]
    };
    res.send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'commentaire inexistant';
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
    let commentaire = await CommentaireService.findById(id);
    let data = {
      commentaire: [commentaire]
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'commentaire inexistant';
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
    let comment = new commentaire(req.body.id_commentaire_touristique,req.body.id_user,req.body.etat);
    let commentaire =await CommentaireService.update(id,comment);
    let data = {
      commentaire: [commentaire]
    };
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    let data = {};
    if(err instanceof BSONTypeError) {
      if(err.code == 'ERR_HTTP_HEADERS_SENT') {
        data.message = 'commentaire inexistant';
      }
    } else {
      data.message = err.message;
    }
    res.status(400).send(data);
  }
});

module.exports = router;
