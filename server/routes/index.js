var express = require('express');
var router = express.Router();
var db = require('../db/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select * from users",[],function(results,fields){
    console.log(results);
    
    res.render('index', { title: 'Express11' });
  })
  // res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const user = req.body;
  console.log(user);
	// const sel_email = $sql.user.select + " where email = '" + user.email + "'";
  // console.log(sel_email);
  res.render('index', { title: 'Express' });
})
module.exports = router;
