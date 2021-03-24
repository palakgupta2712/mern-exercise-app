const router = require('express').Router()
let User = require('../models/user.model')

//GET request method
router.get('/', function (req, res) {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
    })

//POST request method
 router.post('/add', function (req, res) {
    const userName = req.body.userName;
    const age = Number(req.body.age);

    const newUser = new User({
        userName,
        age,
    })
  
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
   })
module.exports = router;