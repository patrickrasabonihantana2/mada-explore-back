var express = require('express');
var router = express.Router();
const AuthentificationRoute = require('./authentification');

router.use(AuthentificationRoute);

module.exports = router;
