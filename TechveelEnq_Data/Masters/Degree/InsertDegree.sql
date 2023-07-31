If Exists( Select DegreeName From TblDegreeMst Where DegreeName  = @DegreeName )     
Begin    
 Raiserror(50001, 16, 3)    
 Return      
End
else

begin
insert into TblDegreeMst(
  
DegreeName,
DegreeType,
--CollegeId,
CreatedBy,
CreatedDate
)
Values (
@DegreeName,
@DegreeType,
--@CollegeId,
@CreatedBy,
GETDATE()


)
SELECT SCOPE_IDENTITY() AS DegreeId
End








