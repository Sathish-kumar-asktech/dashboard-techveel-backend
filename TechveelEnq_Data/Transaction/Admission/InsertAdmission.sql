If Exists(
  Select
   PhoneNumber,Email
  From
    TblStudentAdmission
  Where
    PhoneNumber = @PhoneNumber or Email = @Email
) Begin Raiserror(50001, 16, 3) Return
End
else begin

Insert Into TblStudentAdmission
(
	AdmissionNo,
	-- basic information
	FirstName,
	LastName,
	FatherName,
	Dob,
	Gender,
	GraduationType,
	PhoneNumber,
	Email,
	
	-- education details
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

	-- address information
	Address1,
	Address2,
	CityId,
	StateId,
	ZipCode,

	-- documents
	doc1,
	doc2,
	doc3,
	doc4,

    -- other details
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
	DiscountAmount,
	NetAmount,
	CreatedBy,
	CreatedDate
)
values 
(
	'Techveel-Admisson',
	@FirstName,
	@LastName,
	@FatherName,
	@Dob,
	@Gender,
	@GraduationType,
	@PhoneNumber,
	@Email,

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
	
	@Address1,
	@Address2,	
	@CityId,
	@StateId,
	@ZipCode,

	@doc1,
	@doc2,
	@doc3,
	@doc4,
	
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
	@DiscountAmount,
	@NetAmount,
	@CreatedBy,
	Getdate()
)
SELECT SCOPE_IDENTITY() AS AdmissionId
End