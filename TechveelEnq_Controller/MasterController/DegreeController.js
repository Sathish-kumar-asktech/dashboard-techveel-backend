


const Degreedata = require('../../TechveelEnq_Data/Masters/Degree');






const GetAllDegree = async (req, res, next) => {
    try {

        const GetAllEvent = await Degreedata.GetAllDegree()
        res.send(GetAllEvent);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}



const GetOneDegree = async (req, res, next) => {
    try {
        const DegreeId =  req.params.id
        const Getone = await Degreedata.GetOneDegree(DegreeId)
        res.send(Getone);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}




const InsertDegree = async (req, res, next) => {
    try {
        const Degree =  req.body
        const InsertEvent = await Degreedata.InsertDegree(Degree)
        res.send(InsertEvent);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}




const UpdateDegree = async (req, res, next) => {
    try {
        const DegreeId =  req.params.id
        const Degree =  req.body
        const  UpdateEvent = await Degreedata.UpdateDegree(DegreeId,Degree)
        res.send(UpdateEvent);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}


const DeleteDegree= async (req, res, next) => {
    try {
        const DegreeId =  req.params.id
        
        const DeleteEvent = await Degreedata.DeleteDegree(DegreeId)
        res.send(DeleteEvent);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}



module.exports={
   
    GetAllDegree:GetAllDegree,
    GetOneDegree,GetOneDegree,
    InsertDegree:InsertDegree,
    UpdateDegree:UpdateDegree,
    DeleteDegree:DeleteDegree
    

}