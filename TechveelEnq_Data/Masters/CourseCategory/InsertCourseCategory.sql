If Exists( Select * From TblCourseCategoryMst Where Course_Category  = @Course_Category )     
Begin    
 Raiserror(50001, 16, 3)    
 Return      
End
else
begin
insert into TblCourseCategoryMst(
Course_Category,
CreatedBy,
CreatedDate
)
Values (
   @Course_Category,
@CreatedBy,
GETDATE()
)
SELECT SCOPE_IDENTITY() AS CourseCategoryId
End








