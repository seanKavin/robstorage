var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var user = require('../models/user').user;

mongoose.connect('mongodb://localhost/robmit');

/** * 连接异常 */ 
mongoose.connection.on('error', () => {
  console.log('Mongoose connection error')
});

/** * 连接成功 */ 
mongoose.connection.on('open', () => {
  console.log('Mongoose connection success')
}); 

/** * 连接断开 */ 
mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose connection disconnected'); 
});
 
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
 
// /*login*/
// router.get('/login', function(req, res) {
//     res.render('login', { title: 'login' });
// });
 
// /*logout*/
// router.get('/logout', function(req, res) {
//       res.render('logout', { title: 'logout' });
// });
 
// /*hompage*/
// router.post('/homepage', function(req, res) {
//     var query_doc = {userid: req.body.userid, password: req.body.password};
//     (function(){
//         user.count(query_doc, function(err, doc){
//             if(doc == 1){
//                 console.log(query_doc.userid + ": login success in " + new Date());
//                 res.render('homepage', { title: 'homepage' });
//             }else{
//                 console.log(query_doc.userid + ": login failed in " + new Date());
//                 res.redirect('/');
//             }
//         });
//     })(query_doc);
// });

module.exports = router;
