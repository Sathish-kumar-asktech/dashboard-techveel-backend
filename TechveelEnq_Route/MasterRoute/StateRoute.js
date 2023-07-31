
const express = require('express');
const StateController = require('../../TechveelEnq_Controller/MasterController/StateController');

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

router.get('/GetAllState',verifytoken, StateController.getAllState); 

router.get('/GetOneState/:id',verifytoken, StateController.GetoneState); 
router.post('/InsertState', verifytoken,StateController.InsertState); 
router.put('/UpdateState/:id', verifytoken,StateController.UpdateState); 
router.delete('/deleteState/:id',verifytoken, StateController.DeleteState); 

module.exports={
    TechveelEnq_Route:router
}