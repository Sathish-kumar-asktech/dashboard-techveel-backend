If Exists(
  Select
   CityName
  From
    tblcitymst
  Where
    CityName = @CityName
) Begin Raiserror(50001, 16, 3) Return
End
else begin
insert into
  tblcitymst(CityName, StateId, CreatedBy, CreatedDate)
Values
  (@CityName, @StateId, @CreatedBy, GETDATE())
SELECT
  SCOPE_IDENTITY() AS CityId
End