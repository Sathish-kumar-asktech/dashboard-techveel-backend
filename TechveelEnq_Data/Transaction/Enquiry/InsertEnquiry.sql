If Exists(
  Select
   PhoneNumber,Email
  From
    TblStudentEnquiry
  Where
    PhoneNumber = @PhoneNumber or Email = @Email
) Begin Raiserror(50001, 16, 3) Return
End
else begin

Insert Into TblStudentEnquiry
(
EnquiryNo,
FirstName,
LastName,
	FatherName,
	Dob,
	Gender,
	GraduationType,
	PhoneNumber,
	Email,
	CityId,
	CollegeId,
	DegreeId,
	SslcPer,
	SslcPassedout,
	HscPer,
	HscPassedout,
UGPer,
UGPassedOut,
PGPer,
PGPassedOut,
	PerferenceMode,
	PerferenceDay,
	PerferenceTiming,
	CourseId,
	CourseTechnologyId,
	WorkingStatus,
	WorkingIndustry,
	WorkingCompany,
	ReferenceBy,
	ReferenceContactNumber,
	CreatedBy,
	CreatedDate
)
values 
(
'Techveel',
@FirstName,
@LastName,
@FatherName,
@Dob,
	@Gender,
	@GraduationType,
	@PhoneNumber,
	@Email,
	@CityId,
	@CollegeId,
	@DegreeId,
	@SslcPer,
	@SslcPassedout,
	@HscPer,
	@HscPassedout,
	@UGPer,
	@UGPassedOut,
	@PGPer,
	@PGPassedOut,
	@PerferenceMode,
	@PerferenceDay,
	@PerferenceTiming,
	@CourseId,
	@CourseTechnologyId,
	@WorkingStatus,
	@WorkingIndustry,
	@WorkingCompany,
	@ReferenceBy,
	@ReferenceContactNumber,
	@CreatedBy,
	Getdate()
)

SELECT SCOPE_IDENTITY() AS EnquiryId
End