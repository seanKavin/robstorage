
var express = require('express');
var mongoose = require("mongoose");
var moment = require('moment');
var router = express.Router();

var ReturnCode = require('../../common/returncode');
var Fields = require('../../common/fields');
var Account = require('../../models/account');

router.get('/', function(req, res, next) {
  res.send("Profile datas...");
});
 
/* login */
router.post('/login', function(req, res) {
    let accountVo = new mongoose.models.Account({
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
    });
    let criteria = {
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
    };
    let fields = Fields.Account.DEFAULT;
    res.send({
        "action": "profileLogin"
    });
});

/* regist */
router.post('/regist', function(req, res) {
    let accountVo = new mongoose.models.Account({
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
        create_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss.ms')
    });
    accountVo.save(function(err, result){
        if(err){
            console.log("Error:" + err);
            res.send({code: ReturnCode.OK.code, data: null, msg: ReturnCode.OK.text});
        }else{
            console.log("res:  ", res);
            res.send({
                code: ReturnCode.OK.code, msg: ReturnCode.OK.text,
                data: res
            });
            // res.send({"msg": `new account [_id:${result._id}, name:${result.name}] saved at ${res.create_time}!`});
        }
    });
});

module.exports = router;