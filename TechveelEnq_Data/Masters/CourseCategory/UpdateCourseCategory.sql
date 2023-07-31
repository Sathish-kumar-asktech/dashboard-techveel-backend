If Exists(
  Select
    Course_Category
  From
    TblCourseCategoryMst
  Where
    CourseCategoryId not in (@CourseCategoryId)
    and Course_Category = @Course_Category
) Begin Raiserror(50001, 16, 3) Return
End
else BEGIN
Update
  TblCourseCategoryMst
set
  Course_Category = @Course_Category,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
CourseCategoryId = @CourseCategoryId
end