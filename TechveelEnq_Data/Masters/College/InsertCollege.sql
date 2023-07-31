If Exists( Select * From TblCollegeMst Where CollegeName  = @CollegeName )     
Begin    
 Raiserror(50001, 16, 3)    
 Return      
End
else

begin
insert into TblCollegeMst(
 
CollegeName,
CityId,
StateId,
CreatedBy,
CreatedDate
)
Values (
   @CollegeName,
@CityId,
@StateId,
@CreatedBy,
GETDATE()


)
SELECT SCOPE_IDENTITY() AS CollegeId
End








