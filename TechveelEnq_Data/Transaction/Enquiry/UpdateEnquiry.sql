Update TblStudentEnquiry

SET 
-- EnquiryNo = @EnquiryNo, 
FirstName = @FirstName, 
LastName = @LastName, FatherName = @FatherName, Dob = @Dob, 
Gender = @Gender, GraduationType = @GraduationType, 
PhoneNumber = @PhoneNumber, Email = @Email, 
CityId = @CityId, CollegeId = @CollegeId, DegreeId = @DegreeId, 
SslcPer = @SslcPer, SslcPassedout = @SslcPassedout, 
HscPer = @HscPer, HscPassedout = @HscPassedout, 
UGPer = @UGPer, UGPassedOut = @UGPassedOut, 
PGPer = @PGPer, PGPassedOut = @PGPassedOut, 
PerferenceMode = @PerferenceMode, 
PerferenceDay = @PerferenceDay, PerferenceTiming = @PerferenceTiming, 
CourseId = @CourseId, CourseTechnologyId = @CourseTechnologyId, 
WorkingStatus = @WorkingStatus, WorkingIndustry = @WorkingIndustry, 
WorkingCompany = @WorkingCompany, ReferenceBy = @ReferenceBy, ReferenceContactNumber = @ReferenceContactNumber, Modifyby = @Modifyby, ModifyDate = Getdate()
WHERE EnquiryId = @EnquiryId