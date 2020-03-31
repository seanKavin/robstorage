var mongoose = require("mongoose");
var moment = require('moment');

var Schema = mongoose.Schema;
var accountSchema = new Schema({
    dgid: {
        type: String,
        default: "",
        set: v => v,
        get: v => v,
    },
    sid: {
        type: String,
        default: "",
        set: v => v,
        get: v => v,
    },
    username: {
        type: String,
        set: v => v,
        get: v => v,
    },
    password: {
        type: String,
        set: v => v,
        get: v => v,
    },
    mailbox: {
        type: String,
        default: "",
        set: v => v,
        get: v => v,
    },
    type: {
        type: Number,
        default: 0,
        set: v => v,
        get: v => v,
    },
    phone_number: {
        type: String,
        default: "",
        set: v => v,
        get: v => v,
    },
    score: {
        type: Number,
        default: 0,
        set: v => v,
        get: v => v,
    },
    act_score: {
        type: Number,
        default: 0,
        set: v => v,
        get: v => v,
    },
    status: {
        type: Number,
        default: 0,
        set: v => v,
        get: v => v,
    },
    create_time: {
        type: String,
        default: moment(new Date()).format('YYYY-MM-DD HH:mm:ss.ms'),
        set: v => v,
        get: v => v,
    }

});

// exports.Account = mongoose.model("Account", accountSchema, 'account'); 
module.exports = mongoose.model("Account", accountSchema, 'account'); 