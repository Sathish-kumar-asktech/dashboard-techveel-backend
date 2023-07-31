If Exists(
  Select
    Course_Name
  From
    TblCourseMst
  Where
    CourseId not in (@CourseId)
    and Course_Name = @Course_Name
) 

Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  TblCourseMst
set
  Course_Name = @Course_Name,
  Course_Duration= @Course_Duration,
  Course_Fee  = @Course_Fee,
  CourseCategoryId = @CourseCategoryId,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  CourseId = @CourseId
end