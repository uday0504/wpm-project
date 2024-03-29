var express = require('express');
var router = express.Router();
var ctrlLocations=require('../controllers/locations');
var ctrlOthers=require('../controllers/others');


/* Locations page*/
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);
/* others page*/
router.get('/about', ctrlOthers.about);


module.exports = router;