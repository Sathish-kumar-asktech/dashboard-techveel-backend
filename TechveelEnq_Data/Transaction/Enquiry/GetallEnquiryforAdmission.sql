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
    cm.CityName, 
    clg.CollegeName, 
    d.DegreeName,
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
    ct.Course_Name,
    se.CourseTechnologyId,
    tech.Course_Category,
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
