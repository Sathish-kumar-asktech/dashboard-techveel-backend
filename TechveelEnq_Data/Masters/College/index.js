const utils = require('../../Utill');
const config = require('../../../config');

const sql = require('mssql');


const InsertCollege = async (Collegedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/College');
        const insertEvent = await pool.request()
        .input('CityId',sql.BigInt, Collegedata.CityId)
        .input('StateId',sql.BigInt, Collegedata.StateId)
        .input('CollegeName', sql.VarChar(50),Collegedata.CollegeName)
        .input('CreatedBy',sql.BigInt, Collegedata.CreatedBy)
    
        .query(sqlQueries.InsertCollege);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}



const GetAllCollege = async () => {
  
    try
     {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/College');
        const GetAllEvent = await pool.request()
        .query(sqlQueries.GetAllCollege);
        return GetAllEvent.recordset;
     }     
 
    
    catch (error) 
    {
       
        return error.message;
      
    }
}




const GetOneCollege = async (CollegeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/College');
        const GetOneEvent = await pool.request()
        .input('CollegeId', sql.BigInt,CollegeId)
        .query(sqlQueries.GetOneCollege);
       
          return GetOneEvent.recordset;
          
    } 
    catch (error) 
    {
       
        return   error.message
      
    }
}


const UpdateCollege = async (CollegeId,Collegedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/College');
        const UpdateEvent = await pool.request()
        
        .input('CollegeId',sql.BigInt,CollegeId)
        .input('CityId',sql.BigInt, Collegedata.CityId)
        .input('StateId',sql.BigInt, Collegedata.StateId)
        .input('CollegeName', sql.VarChar(50),Collegedata.CollegeName)
        .input('ModifyBy',sql.BigInt, Collegedata.ModifyBy)
      
        
        .query(sqlQueries.UpdateCollege);
        return UpdateEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const DeleteCollege = async (CollegeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/College');
        const deleteEvent = await pool.request()
            .input('CollegeId', sql.BigInt,CollegeId)
            
            .query(sqlQueries.DeleteCollege);
        return deleteEvent.recordset;
    } 
    catch (error) 
    {
        return error.message;
    }
}












module.exports={
    InsertCollege:InsertCollege,
    GetOneCollege:GetOneCollege,
    GetAllCollege:GetAllCollege,
    UpdateCollege:UpdateCollege,
    DeleteCollege:DeleteCollege
}


