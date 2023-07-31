const utils =require('../../Utill');
const config=require('../../../Config');


const sql=require('mssql');

const InsertDegree = async (Degreedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/Degree');
        const insertEvent = await pool.request()
        .input('DegreeName', sql.VarChar(250),Degreedata.DegreeName)
        .input('DegreeType', sql.VarChar(50),Degreedata.DegreeType)
        // .input('CollegeId',  sql.BigInt,Degreedata.CollegeId)
        .input('CreatedBy',  sql.BigInt, Degreedata.CreatedBy)
        
        .query(sqlQueries.InsertDegree);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}



const GetAllDegree = async () => {
  
    try
     {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/Degree');
        const GetAll = await pool.request()
        .query(sqlQueries.GetAllDegree);
        return GetAll.recordset;
     }     
 
    
    catch (error) 
    {
       
        return error.message;
      
    }
}




const GetOneDegree = async (DegreeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/Degree');
        const Getone = await pool.request()
        .input('DegreeId', sql.BigInt,DegreeId)
        .query(sqlQueries.GetOneDegree);
       
          return Getone.recordset;
          
    } 
    catch (error) 
    {
       
        return   error.message
      
    }
}


const UpdateDegree = async (DegreeId,Degreedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/Degree');
        const UpdateEvent = await pool.request()
        .input('DegreeId', sql.BigInt,DegreeId)
        .input('DegreeName', sql.VarChar(250),Degreedata.DegreeName)
        .input('DegreeType', sql.VarChar(50),Degreedata.DegreeType)
        // .input('CollegeId', sql.BigInt,Degreedata.CollegeId)
        .input('ModifyBy',sql.BigInt, Degreedata.ModifyBy)
      
        
        .query(sqlQueries.UpdateDegree);
        return UpdateEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const DeleteDegree = async (DegreeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/Degree');
        const deleteEvent = await pool.request()
            .input('DegreeId', sql.BigInt,DegreeId)
            
            .query(sqlQueries.DeleteDegree);
        return deleteEvent.recordset;
    } 
    catch (error) 
    {
        return error.message;
    }
}










module.exports={
    GetAllDegree:GetAllDegree,
    GetOneDegree:GetOneDegree,
    InsertDegree:InsertDegree,
    UpdateDegree:UpdateDegree,
    DeleteDegree:DeleteDegree
}
