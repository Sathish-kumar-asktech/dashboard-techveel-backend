-- select 
-- EnquiryId,
-- EnquiryNo,
-- FirstName,
-- LastName,
-- FatherName,
-- Dob,
-- Gender,
-- GraduationType,
-- PhoneNumber,
-- Email,
-- CityId,
-- CollegeId,
-- DegreeId,
-- SslcPer,
-- SslcPassedout,
-- HscPer,
-- HscPassedout,
-- UGPer,
-- UGPassedOut,
-- PGPer,
-- PGPassedOut,
-- PerferenceMode,
-- PerferenceDay,
-- PerferenceTiming,
-- CourseId,
-- CourseTechnologyId,
-- WorkingStatus,
-- WorkingIndustry,
-- WorkingCompany,
-- ReferenceBy,
-- ReferenceContactNumber
-- From
-- TblStudentEnquiry 
-- where  convert (Varchar(10), CreatedDate,112) between @FromDate and @ToDate 

-- select *
-- From
-- TblStudentEnquiry 
-- where  convert (Varchar(10), CreatedDate,112) between @FromDate and @ToDate 

SELECT
    se.EnquiryId,
    se.EnquiryNo,
    se.FirstName,
    se.LastName,
    se.FatherName,
    se.Dob,
    se.Gender,
    se.GraduationType,
    se.PhoneNumber,
    se.Email,
    cm.CityName, -- Fetching City Name from tblcitymst using CityId
    clg.CollegeName, -- Fetching College Name from tblcollgemst using CollegeId
    d.DegreeName, -- Fetching Degree Name from tbldegreemst using DegreeId
    se.SslcPer,
    se.SslcPassedout,
    se.HscPer,
    se.HscPassedout,
    se.UGPer,
    se.UGPassedOut,
    se.PGPer,
    se.PGPassedOut,
    se.PerferenceMode,
    se.PerferenceDay,
    se.PerferenceTiming,
    se.CourseId,
    ct.Course_Name, -- Fetching Course Name from tblcoursemst using CourseId
    se.CourseTechnologyId,
    tech.Course_Category, -- Fetching Course Technology Name from tblcoursetechnologymst using CourseTechnologyId
    se.WorkingStatus,
    se.WorkingIndustry,
    se.WorkingCompany,
    se.ReferenceBy,
    se.ReferenceContactNumber,
    se.CreatedDate
FROM
    TblStudentEnquiry se
    LEFT JOIN tblcitymst cm ON se.CityId = cm.CityId
    LEFT JOIN TblCollegeMst clg ON se.CollegeId = clg.CollegeId
    LEFT JOIN tbldegreemst d ON se.DegreeId = d.DegreeId
    LEFT JOIN tblcoursemst ct ON se.CourseTechnologyId = ct.CourseId
    LEFT JOIN TblCourseCategoryMst tech ON se.CourseId = tech.CourseCategoryId

where  convert (Varchar(10), se.CreatedDate,112) between @FromDate and @ToDate