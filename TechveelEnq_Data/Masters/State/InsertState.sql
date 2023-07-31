If Exists( Select * From tblstatemst Where StateName  = @StateName )     
Begin    
 Raiserror(50001, 16, 3)    
 Return      
End
else
begin
insert into tblstatemst(
    StateName,
CreatedBy,
CreatedDate
)
Values (
   @StateName,
@CreatedBy,
GETDATE()
)
SELECT SCOPE_IDENTITY() AS StateId
End








