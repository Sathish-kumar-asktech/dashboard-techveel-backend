If Exists(
  Select
    StateName
  From
    tblstatemst
  Where
    StateId not in (@StateId)
    and StateName = @StateName
) Begin Raiserror(50001, 16, 3) Return
End
else BEGIN
Update
  tblstatemst
set
  StateName = @StateName,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  StateId = @StateId
end