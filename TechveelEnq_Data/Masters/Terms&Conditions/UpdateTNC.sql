
-- If Exists( Select CityName From TblTermsConditionsMst Where TermsConditions not in (@TermsConditions) and  TermsConditions  = @TermsConditions )     
-- Begin    
--  Raiserror(50001, 16, 3)    
--  Return      
-- End
-- else
BEGIN
Update TblTermsConditionsMst set 
    TermsConditions=@TermsConditions,
  
    ModifyBy=@ModifyBy,
ModifyDate=GETDATE() 
where TCId=@TCId
end