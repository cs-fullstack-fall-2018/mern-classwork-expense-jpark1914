var express = require('express');
var router = express.Router();
var jpModel = require('../jpbankModel/jpModel');




//Get all user information

router.get('/', (req, res) =>{
  jpModel.find()
      .then(info => res.json(info));

  //.then(() => res.send("We have retrieved the information"));
});

router.post('/', (req, res) => {
  const newBank = new jpModel({
      name: req.body.name,
      password: req.body.password,
      accountBalance: req.body.accountBalance
  });
  newBank.save()
      .then(() => res.send('POST request is okay and has been saved from "bank.js" to the database'));

});






module.exports = router;
