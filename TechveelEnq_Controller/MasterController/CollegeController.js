const CollegeData = require('../../TechveelEnq_Data/Masters/College');









const GetAllCollege = async (req, res, next) => {
    try {

        const Collegelist = await CollegeData.GetAllCollege()
        res.send(Collegelist);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}



const GetOneCollege = async (req, res, next) => {
    try {
        const CollegeId =  req.params.id
        const CollegeOne = await CollegeData.GetOneCollege(CollegeId)
        res.send(CollegeOne);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}




const InsertCollege = async (req, res, next) => {
    try {
        const College =  req.body
        const Collegelist = await CollegeData.InsertCollege(College)
        res.send(Collegelist);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}




const UpdateCollege = async (req, res, next) => {
    try {
        const CollegeId =  req.params.id
        const College =  req.body
        const  Collegelist = await CollegeData.UpdateCollege(CollegeId,College)
        res.send(Collegelist);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}


const DeleteCollege= async (req, res, next) => {
    try {
        const CollegeId =  req.params.id
        
        const Collegelist = await CollegeData.DeleteCollege(CollegeId)
        res.send(Collegelist);        
    } 
    catch (error)
     {
        res.status(400).send(error.message);
    }
}



module.exports={
    InsertCollege:InsertCollege,
    GetOneCollege:GetOneCollege,
    GetAllCollege:GetAllCollege,
    UpdateCollege:UpdateCollege,
    DeleteCollege:DeleteCollege
}

