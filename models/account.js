var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var accountSchema = new Schema({
    dgid: {
        type: String,
        set: v => v,
        get: v => v,
    },
    sid: {
        type: String,
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
        set: v => v,
        get: v => v,
    },
    type: {
        type: Number,
        set: v => v,
        get: v => v,
    },
    phone_number: {
        type: String,
        set: v => v,
        get: v => v,
    },
    score: {
        type: Number,
        set: v => v,
        get: v => v,
    },
    act_score: {
        type: Number,
        set: v => v,
        get: v => v,
    },
    status: {
        type: Number,
        set: v => v,
        get: v => v,
    },
    create_time: {
        type: String,
        set: v => v,
        get: v => v,
    }

});

exports.Account = mongoose.model("Account", accountSchema, 'account'); 