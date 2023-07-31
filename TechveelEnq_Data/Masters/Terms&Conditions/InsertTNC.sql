-- If Exists( Select * From TblTermsConditionsMst Where TermsConditions  = @TermsConditions )     
-- Begin    
--  Raiserror(50001, 16, 3)    
--  Return      
-- End
-- else

begin
insert into TblTermsConditionsMst(
  
TermsConditions,
CreatedBy,
CreatedDate
)
Values (
   @TermsConditions,
@CreatedBy,
GETDATE()


)
SELECT SCOPE_IDENTITY() AS TCId
End








