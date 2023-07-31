


const StateData = require('../../TechveelEnq_Data/Masters/State');






const getAllState = async (req, res, next) => {
    try {

        const Statelist = await StateData.getAllState()
        res.send(Statelist);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}



const GetoneState = async (req, res, next) => {
    try {
        const Stateid =  req.params.id
        const StateOne = await StateData.GetOneState(Stateid)
        res.send(StateOne);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}




const InsertState = async (req, res, next) => {
    try {
        const State =  req.body
        const Statelist = await StateData.InsertStateMaster(State)
        res.send(Statelist);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}




const UpdateState = async (req, res, next) => {
    try {
        const Stateid =  req.params.id
        const State =  req.body
        const  Statelist = await StateData.UpdateState(Stateid,State)
        res.send(Statelist);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}


const DeleteState= async (req, res, next) => {
    try {
        const Stateid =  req.params.id
        
        const Statelist = await StateData.DeleteState(Stateid)
        res.send(Statelist);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}



module.exports={
   
    getAllState:getAllState,
    GetoneState,GetoneState,
    InsertState:InsertState,
    UpdateState:UpdateState,
    DeleteState:DeleteState
    

}