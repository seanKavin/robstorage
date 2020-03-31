
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

/* regist */
router.post('/regist', function(req, res) {
    let accountVo = new Account({
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
        // create_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss.ms')
    });
    accountVo.save(function(error, result){
        if(error){
            res.send({code: ReturnCode.MAINTENANCE.code, data: null, msg: ReturnCode.MAINTENANCE.text});
        }else{
            res.send({
                code: ReturnCode.OK.code, msg: ReturnCode.OK.text,
                data: result
            });
        }
    });
});
 
/* login */
router.post('/login', function(req, res) {
    let criteria = {
        username: req.body.username,
        password: req.body.password,
    };
    let fields = Fields.Account.DEFAULT;
    var options  = {};
    console.log("criteria: ", criteria);
    console.log("fields: ", fields);
    console.log("options: ", options);
    // Account.find(criteria, fields, options, function(error, result){
    Account.findOne(criteria, "-_id username", function(error, result){
        if(error){
            res.send({code: ReturnCode.MAINTENANCE.code, data: null, msg: ReturnCode.MAINTENANCE.text});
        }else{
            res.send({
                code: ReturnCode.OK.code, msg: ReturnCode.OK.text,
                data: result
            });
        }
    });
});

/* search */
router.post('/search', function(req, res) {
    
    let _condi = req.body.condi;
    // [key, op, val, xthen]
    let criteria = {
        username: req.body.username,
        password: req.body.password,
    };
    let fields = Fields.Account.DEFAULT;
    var options  = {};
    console.log("criteria: ", criteria);
    console.log("fields: ", fields);
    console.log("options: ", options);
    Account.find(criteria, fields, options, function(error, result){
        if(error){
            res.send({code: ReturnCode.MAINTENANCE.code, data: null, msg: ReturnCode.MAINTENANCE.text});
        }else{
            res.send({
                code: ReturnCode.OK.code, msg: ReturnCode.OK.text,
                data: result
            });
        }
    });
});

module.exports = router;