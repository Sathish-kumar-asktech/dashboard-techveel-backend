
const express = require('express');
const CollegeController = require('../../TechveelEnq_Controller/MasterController/CollegeController');

const router = express.Router();
const jwt =  require('jsonwebtoken')
function verifytoken(req, res, next) {
    const beareHeader = req.headers['authorization'];
    if(typeof beareHeader !='undefined') {
     const bearer = beareHeader.split(' ')
     const bearerToken = bearer[1]
     req.token = bearerToken
      jwt.verify(bearerToken , 'secretkey' , (err, user) => {
          if(err) {
              res.json({error: 'unauthorzhied user'})
          }else {
            next();
          }
      })
    

    }else {
      res.json({
        error: 'Unauthorized user'
      })
    }
  }

router.get('/GetAllCollege',verifytoken, CollegeController.GetAllCollege); 
router.get('/GetOneCollege/:id',verifytoken, CollegeController.GetOneCollege); 
router.post('/InsertCollege', verifytoken,CollegeController.InsertCollege); 
router.put('/UpdateCollege/:id', verifytoken,CollegeController.UpdateCollege); 
router.delete('/DeleteCollege/:id',verifytoken, CollegeController.DeleteCollege); 

module.exports={
    TechveelEnq_Route:router
}