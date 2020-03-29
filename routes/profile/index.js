
var express = require('express');
var mongoose = require("mongoose");
var moment = require('moment');
var router = express.Router();
var Account = require('../../models/account');

router.get('/', function(req, res, next) {
  res.send("Profile datas...");
});
 
/* login */
router.post('/login', function(req, res) {
    res.send({
        "action": "profileLogin"
    });
});

/* regist */
router.post('/regist', function(req, res) {
    console.log("-----Account: ", Account)
    console.log("-----Accountqwq: ", req.body)
    var accountVo = new mongoose.models.Account({
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
        create_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss.ms')
    });
    // let accountVo = {
    //     username: req.body.username,
    //     password: req.body.password,
    //     type: req.body.type,
    //     create_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss.ms')
    // };
    accountVo.save(function(err, res){
        if(err){
            console.log("Error:" + err);
        }else{
            console.log("res:  ", res);
            res.send(`new account [name:${account.name}] saved at ${account.create_time}!`);
        }
    });
});

module.exports = router;