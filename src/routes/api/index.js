var express = require('express');
var router = express.Router();


const utilisateurRouter = require('./utilisateur');
const siteTouristiqueRouter=require('./site-touristique');
const sitefavorisRouter=require('./site-favoris');
const commentaireRouter=require('./commentaire');

router.use('/utilisateur', utilisateurRouter);
router.use('/site', siteTouristiqueRouter);
router.use('/favoris', sitefavorisRouter);
router.use('/commentaire', commentaireRouter);

module.exports = router;
