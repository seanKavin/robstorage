
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("Profile datas...");
});
 
/*login*/
router.post('/login', function(req, res) {
    res.send({
        "action": "profileLogin"
    })
});

module.exports = router;