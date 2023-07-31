If Exists(
  Select
    CollegeName
  From
    TblCollegeMst
  Where
    CollegeId not in (@CollegeId)
    and CollegeName = @CollegeName
) Begin Raiserror(50001, 16, 3) Return
End
else BEGIN
Update
  TblCollegeMst
set
  CollegeName = @CollegeName,
  CityId = @CityId,
  StateId = @StateId,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  CollegeId = @CollegeId
end