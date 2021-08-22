const {Router} = require('express');
const router = Router();

/* GET home page. */
router.get('/', function (req, res)
{
	res.render('index', {title: 'Express'});
});

module.exports = router;
