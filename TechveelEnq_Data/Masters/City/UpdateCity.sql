If Exists(
  Select
    CityName
  From
    tblcitymst
  Where
    CityId not in (@CityId)
    and CityName = @CityName
) 

Begin 
Raiserror(50001, 16, 3) Return
End
else
 BEGIN
Update
  tblcitymst
set
  CityName = @CityName,
  StateId = @StateId,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  CityId = @CityId
end