const utils = require('../../Utill');
const config = require('../../../Config');

const sql = require('mssql');


const InsertStateMaster = async (Statedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/State');
        const insertEvent = await pool.request()
        .input('StateName', sql.VarChar(50),Statedata.StateName)
        .input('CreatedBy',sql.BigInt, Statedata.CreatedBy)
    
        .query(sqlQueries.InsertState);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}



const getAllState = async () => {
  
    try
     {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/State');
        const GetStates = await pool.request().query(sqlQueries.GetAllState);
        return GetStates.recordset;
     }     
 
    
    catch (error) 
    {
       
        return error.message;
      
    }
}




const GetOneState = async (StateId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/State');
        const GetoneState = await pool.request()
        .input('StateId', sql.BigInt,StateId)
        .query(sqlQueries.GetoneState);
       
          return GetoneState.recordset;
          
    } 
    catch (error) 
    {
       
        return   error.message
      
    }
}


const UpdateState = async (StateId,Statedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/State');
        const UpdateEvent = await pool.request()
        .input('StateId', sql.BigInt,StateId)
        .input('StateName', sql.VarChar(100),Statedata.StateName)
        .input('StateInformation', sql.VarChar(1000),Statedata.StateInformation)
        .input('ModifyBy',sql.BigInt, Statedata.ModifyBy)
      
        
        .query(sqlQueries.UpdateState);
        return UpdateEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const DeleteState = async (StateId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Masters/State');
        const deleteEvent = await pool.request()
            .input('StateId', sql.BigInt,StateId)
            
            .query(sqlQueries.DeleteState);
        return deleteEvent.recordset;
    } 
    catch (error) 
    {
        return error.message;
    }
}












module.exports={
    InsertStateMaster:InsertStateMaster,
    getAllState:getAllState,
    GetOneState:GetOneState,
    UpdateState:UpdateState,
    DeleteState:DeleteState
    



}


