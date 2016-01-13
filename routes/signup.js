var express = require('express');
var router = express.Router();


/* GET log in/sign up page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup',function(req,res,next) {
	req.assert('name','name is not empty').notEmpty();
	req.assert('email','email is not empty').isEmail();
	req.assert('password','password is not empty').notEmpty();

	var errors = req.validationErrors();
	if(!errors) {
		res.redirect('index')
	} else {
		 res.render('signup',{message: '',
        errors: errors
    });
	}
});

module.exports = router;
