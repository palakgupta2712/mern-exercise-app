const router = require('express').Router()
router.get('/', function (req, res) {
    res.send('<h1> Exercise home page <h1>');
  })
module.exports = router;