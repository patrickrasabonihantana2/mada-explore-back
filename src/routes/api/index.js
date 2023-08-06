var express = require('express');
var router = express.Router();


const utilisateurRouter = require('./utilisateur');
const siteTouristiqueRouter=require('./site-touristique');
const sitefavorisRouter=require('./site-favoris');
const commentaireRouter=require('./commentaire');
const uploadRouter=require('./upload');
const mediasRouter=require('./medias');

router.use('/utilisateur', utilisateurRouter);
router.use('/site', siteTouristiqueRouter);
router.use('/favoris', sitefavorisRouter);
router.use('/commentaire', commentaireRouter);
router.use('/upload', uploadRouter);
router.use('/medias', mediasRouter);
module.exports = router;
