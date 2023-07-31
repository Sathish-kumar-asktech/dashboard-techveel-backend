If Exists(
  Select
   Course_Name
  From
    TblCourseMst
  Where
    Course_Name = @Course_Name
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  TblCourseMst(Course_Name,Course_Duration,Course_Fee,CourseCategoryId,CreatedBy, CreatedDate)
values
  (@Course_Name, @Course_Duration, @Course_Fee, @CourseCategoryId, @CreatedBy, GETDATE())

SELECT
  SCOPE_IDENTITY() AS CourseId
End