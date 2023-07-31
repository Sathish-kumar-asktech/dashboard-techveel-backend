
If Exists( Select DegreeName From TblDegreeMst Where DegreeName not in (@DegreeName) and  DegreeName  = @DegreeName )     
Begin    
 Raiserror(50001, 16, 3)    
 Return      
End
else
BEGIN
Update TblDegreeMst set 
DegreeName=@DegreeName,
DegreeType=@DegreeType,
--CollegeId=@CollegeId,
ModifyBy=@ModifyBy,
ModifyDate=GETDATE() 
where DegreeId=@DegreeId
end