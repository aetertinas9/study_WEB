var express = require('express');
var router = express.Router();


//kakao api
router.get('/keyboard', function(req, res){

  const menu = {
  type: 'buttons',
  buttons: ['로그인', '차트출력', '차트입력']
};

  res.set({
      'content-type': 'application/json'
  }).send(JSON.stringify(menu));
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
