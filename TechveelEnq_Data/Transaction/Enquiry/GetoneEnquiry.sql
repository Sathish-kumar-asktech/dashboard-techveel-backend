select 
EnquiryId,
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
PerferenceMode,
PerferenceDay,
PerferenceTiming,
CourseId,
CourseTechnologyId,
WorkingStatus,
WorkingIndustry,
WorkingCompany,
ReferenceBy,
ReferenceContactNumber







From
TblStudentEnquiry where EnquiryId=@EnquiryId