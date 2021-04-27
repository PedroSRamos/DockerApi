const express = require('express');
const controller = require('../controller/View.controller');

const router = express.Router();

router.get('/v1/public/characters', controller.listAll);
router.get('/v1/public/characters/:id', controller.listOne);
router.get('/v1/public/characters/:id/comics', controller.listcharactercomics);
router.get('/v1/public/characters/:id/events', controller.listcharacterevents)
router.get('/v1/public/characters/:id/series', controller.listcharacterseries)
router.get('/v1/public/characters/:id/stories', controller.listcharacterstories)

module.exports = router;