var express = require('express');
var router = express.Router();
var apiManager = require("../services/apiManager");

/* GET home page. */
router.get('/', (req, res, next) => {
  	res.sendFile(__dirname.substring(0, __dirname.length - 6) + '/public/index.html');
});

router.get('/products/:name', (req, res, next) => {
  apiManager.getProductsByName(req.params.name, (err, result) => {
    if (err) {
      console.error(`Error getting form field names ${err}`);
    }
    
    res.status(200).send(result);
  });
});

module.exports = router;