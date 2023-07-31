


const TNCdata = require('../../TechveelEnq_Data/Masters/Terms&Conditions');






const GetAllTNC = async (req, res, next) => {
    try {

        const GetAllEvent = await TNCdata.GetAllTNC()
        res.send(GetAllEvent);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}



const GetOneTNC = async (req, res, next) => {
    try {
        const TNCId =  req.params.id
        const Getone = await TNCdata.GetOneTNC(TNCId)
        res.send(Getone);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}




const InsertTNC = async (req, res, next) => {
    try {
        const TNC =  req.body
        const InsertEvent = await TNCdata.InsertTNC(TNC)
        res.send(InsertEvent);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}




const UpdateTNC = async (req, res, next) => {
    try {
        const TNCId =  req.params.id
        const TNC =  req.body
        const  UpdateEvent = await TNCdata.UpdateTNC(TNCId,TNC)
        res.send(UpdateEvent);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}


const DeleteTNC= async (req, res, next) => {
    try {
        const TNCId =  req.params.id
        
        const DeleteEvent = await TNCdata.DeleteTNC(TNCId)
        res.send(DeleteEvent);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}



module.exports={
   
    GetAllTNC:GetAllTNC,
    GetOneTNC,GetOneTNC,
    InsertTNC:InsertTNC,
    UpdateTNC:UpdateTNC,
    DeleteTNC:DeleteTNC
    

}